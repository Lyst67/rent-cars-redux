import React, { useState } from 'react';
import css from './ChooseForm.module.css';
import { Button } from 'components/Button/Button';
import { useSelector } from 'react-redux';
import { selectCars } from 'app/features/cars/selectors';
import { numberWithComma, priceStap } from '../HelperFunctions/nelperFunctions';

export const ChooseForm = ({ onSubmit }) => {
  const carList = useSelector(selectCars);
  const [mileage, setMileage] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleChangeInputFrom = event => {
    let value = event.target.value;
    let newValue = value.replace(/,/g, '');
    setMileage(numberWithComma(newValue));
  };
  const handleChangeInputTo = event => {
    let value = event.target.value;
    let newValue = value.replace(/,/g, '');
    setMileageTo(numberWithComma(newValue));
  };

  const brands = carList.map(item => item.make);
  let uniqueBrandArr = [...new Set(brands)];
  const optionsBrand = uniqueBrandArr.map(brand => ({
    value: brand.toLowerCase(),
    label: brand,
  }));

  const revtalPrices = carList.map(car => car.rentalPrice.replace('$', ''));
  const maxValue = Math.max(...revtalPrices);
  const optionsPrice = priceStap(maxValue).map(price => ({
    value: price,
    label: price,
  }));

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const brand = form.elements.cars.value;
    const price = form.elements.price.value;
    const mileageFrom = form.elements.from.value;
    const mileageTo = form.elements.to.value;
    onSubmit(brand, price, mileageFrom, mileageTo);
    setMileage('');
    setMileageTo('');
    form.reset();
  };

  return (
    <>
      <div>
        <form className={css.search_form} onSubmit={handleSubmit}>
          <div className={css.search_inputs}>
            <label className={css.select_label}>
              Car brand
              <select className={css.select} name="cars" defaultValue="">
                {optionsBrand.map(({ value, label }) => (
                  <option className={css.option} key={value} value={value}>
                    {label}
                  </option>
                ))}
                <option className={css.option} key="enter" value="">
                  Enter the text
                </option>
              </select>
            </label>
            <label className={css.select_label}>
              Price/ 1 hour
              <div className={css.select_wrap}>
                <div className={css.input_place}>To</div>
                <select
                  className={`${css.select} ${css.select_price}`}
                  name="price"
                  defaultValue=""
                >
                  {optionsPrice.map(({ value, label }) => (
                    <option className={css.option} key={value} value={value}>
                      {`${label}$`}
                    </option>
                  ))}
                  <option className={css.option} key="to" value="">
                    {`   $`}
                  </option>
                </select>
              </div>
            </label>
            <div className={css.last_inputs}>
              <label className={css.form_label}>
                Сar mileage / km
                <div className={css.input_wrap}>
                  <div className={css.input_place}>From</div>
                  <input
                    className={css.form_input}
                    type="text"
                    name="from"
                    value={mileage}
                    onChange={handleChangeInputFrom}
                  />
                </div>
              </label>
              <label className={css.form_label}>
                <div className={css.input_wrap}>
                  <div className={css.input_place}>To</div>
                  <input
                    className={`${css.form_input} ${css.second}`}
                    type="text"
                    name="to"
                    value={mileageTo}
                    onChange={handleChangeInputTo}
                  />
                </div>
              </label>
            </div>
            <Button type="submit">Search</Button>
          </div>
        </form>
      </div>
    </>
  );
};
