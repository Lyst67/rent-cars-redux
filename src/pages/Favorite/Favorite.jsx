import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Favorite.module.css';
import { CarList } from 'components/CarList/CarList';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'app/features/cars/selectors';

function Favorite() {
  const cars = useSelector(selectFavorites);
  return (
    <section className={css.section}>
      <div className={css.favorite_container}>
        <ChooseForm />
        <CarList cars={cars} />
      </div>
    </section>
  );
}
export default Favorite;
