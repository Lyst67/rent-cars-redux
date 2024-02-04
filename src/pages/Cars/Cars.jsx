import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Cars.module.css';
import { CarList } from 'components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectCars,
  selectNotFound,
  selectPage,
  selectisLoading,
} from 'app/features/cars/selectors';
import { fetchCars } from 'app/features/cars/car-operations';
import { removePage } from 'app/features/cars/carSlice';
import { Loader } from 'components/Loader/Loader';

function Cars() {
  const dispatch = useDispatch();
  const statePage = useSelector(selectPage);
  const carList = useSelector(selectCars);
  const notFound = useSelector(selectNotFound);
  const isLoading = useSelector(selectisLoading);

  useEffect(() => {
    dispatch(removePage());
    dispatch(fetchCars({ limit: 12, page: 1 }));
  }, [dispatch]);

  function handleLoadmore() {
    dispatch(fetchCars({ page: statePage - 1 }));
  }

  return (
    <>
      {isLoading && <Loader />}
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
    </>
  );
}
export default Cars;
