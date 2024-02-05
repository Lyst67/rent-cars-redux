import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Favorite.module.css';
import { CarList } from 'components/CarList/CarList';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'app/features/cars/selectors';
import { useState } from 'react';

function Favorite() {
  const cars = useSelector(selectFavorites);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const filteredCars = selectedBrand
    ? cars.filter(car => car.make.toLowerCase() === selectedBrand)
    : cars;

  function handleChooseMake(brand) {
    setSelectedBrand(brand);
  }
  return (
    <section className={css.section}>
      <div className={css.favorite_container}>
        <ChooseForm onChange={handleChooseMake} />
        <CarList cars={filteredCars} />
      </div>
    </section>
  );
}
export default Favorite;
