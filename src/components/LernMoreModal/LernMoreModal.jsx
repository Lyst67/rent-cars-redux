import { MiddleButton } from 'components/MiddleButton/MiddleButton';
import css from './LernMoreModal.module.css';
import sprite from '../assets/sprite.svg';
import { useCallback, useEffect } from 'react';
import {
  conditions,
  minAge,
  lastWord,
  preLastWord,
} from '../HelperFunctions/nelperFunctions';

export const LernMoreModal = ({ onClose, carItem }) => {
  const {
    img,
    make,
    model,
    year,
    type,
    id,
    address,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    accessories,
    functionalities,
    rentalPrice,
    mileage,
  } = carItem;

  const handleMakeCall = e => {
    e.preventDefault();
    document.location.href = 'tel:+380730000000';
  };

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <div className={css.modal_backdrop} onClick={onClose}>
        <div className={css.modal_container} onClick={e => e.stopPropagation()}>
          <button type="button" className={css.close_btn} onClick={onClose}>
            <svg className={css.icon_x}>
              <use href={`${sprite}#x`} />
            </svg>
          </button>
          <div className={css.car_img_box}>
            <img className={css.car_img} src={img} alt="car" />
          </div>
          <div className={css.car_name}>
            <div>
              {make}
              <span className={css.car_model}> {model}, </span>
              {year}
            </div>
          </div>
          <ul className={css.car_options}>
            <li className={css.options_wrap}>
              <span>{preLastWord({ address })}</span>
              <hr className={css.hr} />
              <span>{lastWord({ address })}</span>
              <hr className={css.hr} />
              <span>Id:{id}</span>
              <hr className={css.hr} />
              <span>Year:{year}</span>
              <hr className={css.hr} />
              <span>Type:{type}</span>
            </li>
            <li className={css.options_wrap}>
              <span>Fuel Consumption:{fuelConsumption}</span>
              <hr className={css.hr} />
              <span>Engine Size:{engineSize}</span>
            </li>
          </ul>
          <p className={css.description}>{description}</p>
          <p className={css.car_accessories}>
            Accessories and functionalities:
          </p>
          <ul className={`${css.car_options} ${css.car_options_bottom}`}>
            <li>
              <span>{accessories[0]}</span>
              <hr className={css.hr} />
              <span>{accessories[1]}</span>
              <hr className={css.hr} />
              <span>{accessories[2]}</span>
            </li>
            <li>
              <span>{functionalities[0]}</span>
              <hr className={css.hr} />
              <span>{functionalities[1]}</span>
              <hr className={css.hr} />
              <span>{functionalities[2]}</span>
            </li>
          </ul>
          <p className={css.car_accessories}>Rental Conditions:</p>
          <ul className={css.features}>
            <li className={css.conditions_row}>
              <div className={css.conditions_item}>
                Minimum age :
                <span className={css.customer_data}>
                  {` ${minAge(rentalConditions)}`}
                </span>
              </div>
              <div className={css.conditions_item}>
                {conditions(rentalConditions)[1]}
              </div>
            </li>
            <li className={css.conditions_row}>
              <div className={css.conditions_item}>
                {conditions(rentalConditions)[2]}
              </div>
              <div className={css.conditions_item}>
                Mileage:
                <span className={css.customer_data}>{` ${mileage}`}</span>
              </div>
              <div className={css.conditions_item}>
                Price:
                <span className={css.customer_data}>{` ${rentalPrice}`}</span>
              </div>
            </li>
          </ul>
          <MiddleButton onClick={handleMakeCall}>Rental car</MiddleButton>
        </div>
      </div>
    </>
  );
};
