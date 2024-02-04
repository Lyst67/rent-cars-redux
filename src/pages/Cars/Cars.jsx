import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Cars.module.css';
import { CarList } from 'components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectCars,
  selectNotFound,
  selectPage,
} from 'app/features/cars/selectors';
import { fetchCars } from 'app/features/cars/car-operations';
import { removePage } from 'app/features/cars/carSlice';

function Cars() {
  const dispatch = useDispatch();
  const statePage = useSelector(selectPage);
  const carList = useSelector(selectCars);
  const notFound = useSelector(selectNotFound);

  useEffect(() => {
    dispatch(removePage());
    dispatch(fetchCars({ limit: 12, page: 1 }));
  }, [dispatch]);

  function handleLoadmore() {
    dispatch(fetchCars({ page: statePage - 1 }));
  }

  return (
    <section className={css.section}>
      <div className={css.cars_container}>
        <ChooseForm />
        <CarList cars={carList} />
        {!notFound && (
          <button
            type="button"
            onClick={handleLoadmore}
            className={css.load_more}
          >
            Load more
          </button>
        )}
      </div>
    </section>
  );
}
export default Cars;
