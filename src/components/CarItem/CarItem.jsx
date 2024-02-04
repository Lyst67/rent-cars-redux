import { BigButton } from 'components/BigButton/BigButton';
import css from './CarItem.module.css';
import sprite from '../assets/sprite.svg';
import { useState } from 'react';
import { LernMoreModal } from 'components/LernMoreModal/LernMoreModal';
import {
  getAccessory,
  preLastWord,
  lastWord,
  premium,
} from '../HelperFunctions/nelperFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'app/features/favorifeSlice';
import { selectFavorites } from 'app/features/cars/selectors';

export const CarItem = ({ carItem }) => {
  const dispatch = useDispatch();
  const carFavorite = useSelector(selectFavorites);

  const [openModal, setOpenModal] = useState(false);
  const {
    img,
    make,
    model,
    year,
    rentalCompany,
    type,
    id,
    address,
    accessories,
    functionalities,
    rentalPrice,
  } = carItem;

  const handleLernMoreModal = () => {
    setOpenModal(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleFavorite = () => {
    dispatch(toggleFavorite(carItem));
  };
  const favoriteIcon = carFavorite.find(car => car.id === id);

  return (
    <>
      <div className={css.car_item}>
        <div className={css.car_img_box}>
          <button type="button" onClick={handleFavorite}>
            <svg
              className={
                favoriteIcon
                  ? `${css.icon_heart} ${css.icon_heart_full}`
                  : `${css.icon_heart}`
              }
            >
              <use href={`${sprite}#heart`} />
            </svg>
          </button>

          <img className={css.car_img} src={img} alt="car" />
        </div>
        <div className={css.car_name}>
          <div>
            {make}
            <span className={css.car_model}> {model}, </span>
            {year}
          </div>
          <p>{rentalPrice}</p>
        </div>
        <ul className={css.car_options}>
          <li className={css.options_wrap}>
            <span>{preLastWord({ address })}</span>
            <hr className={css.hr} />
            <span>{lastWord({ address })}</span>
            <hr className={css.hr} />
            <span>{rentalCompany}</span>
            <hr className={css.hr} />
            <span>{premium(year)}</span>
          </li>
          <li className={css.options_wrap}>
            <span>{type}</span>
            <hr className={css.hr} />
            <span>{model}</span>
            <hr className={css.hr} />
            <span>{id}</span>
            <hr className={css.hr} />
            <span>{getAccessory(accessories, functionalities)}</span>
          </li>
        </ul>
        <BigButton onClick={handleLernMoreModal}>Learn more</BigButton>
      </div>
      {openModal && (
        <LernMoreModal
          onClose={handleCloseModal}
          carItem={carItem}
          openModal={openModal}
        />
      )}
    </>
  );
};
