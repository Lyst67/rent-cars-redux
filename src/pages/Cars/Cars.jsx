import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Cars.module.css';
import { CarList } from 'components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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
  const [selectedBrand, setSelectedBrand] = useState(null);

  const filteredCars = selectedBrand
    ? carList.filter(car => car.make.toLowerCase() === selectedBrand)
    : carList;

  useEffect(() => {
    dispatch(removePage());
    dispatch(fetchCars({ limit: 12, page: 1 }));
  }, [dispatch]);

  function handleLoadmore() {
    dispatch(fetchCars({ page: statePage - 1 }));
  }
  function handleChooseMake(brand) {
    setSelectedBrand(brand);
  }

  return (
    <>
      {isLoading && <Loader />}
      <section className={css.section}>
        <div className={css.cars_container}>
          <ChooseForm onChange={handleChooseMake} />
          <CarList cars={filteredCars} />
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
