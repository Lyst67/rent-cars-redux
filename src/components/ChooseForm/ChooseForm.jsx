import React from 'react';
import css from './ChooseForm.module.css';
import { Button } from 'components/Button/Button';
import { useSelector } from 'react-redux';
import { selectCars } from 'app/features/cars/selectors';

const optionPrice = [{ value: 'to', label: 'To $' }];

export const ChooseForm = ({ onChange }) => {
  const carList = useSelector(selectCars);

  const brands = carList.map(item => item.make);
  let uniqueArr = [...new Set(brands)];
  const option = uniqueArr.map(brand => ({
    value: brand.toLowerCase(),
    label: brand,
  }));

  const handleSubmit = e => {
    e.preventDefault();
    const brand = e.target.value;
    onChange(brand);
  };

  return (
    <>
      <div>
        <form className={css.search_form} onChange={handleSubmit}>
          <div className={css.search_inputs}>
            <label className={css.select_label}>
              Car brand
              <select className={css.select} name="cars" defaultValue="enter">
                {option.map(({ value, label }) => (
                  <option className={css.option} key={value} value={value}>
                    {label}
                  </option>
                ))}
                <option className={css.option} key="enter" value="enter">
                  Enter the text
                </option>
              </select>
            </label>
            <label className={css.select_label}>
              Price/ 1 hour
              <select
                className={`${css.select} ${css.select_price}`}
                name="price"
                defaultValue="to"
              >
                {optionPrice.map(({ value, label }) => (
                  <option className={css.option} key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <div className={css.last_inputs}>
              <label className={css.form_label}>
                Сar mileage / km
                <div className={css.input_wrap}>
                  <div className={css.input_place}>From</div>
                  <input className={css.form_input} type="text" name="price" />
                </div>
              </label>
              <label className={css.form_label}>
                <div className={css.input_wrap}>
                  <div className={css.input_place}>To</div>
                  <input
                    className={`${css.form_input} ${css.second}`}
                    type="text"
                    name="price"
                  />
                </div>
              </label>
            </div>
            <Button>Search</Button>
          </div>
        </form>
      </div>
    </>
  );
};
