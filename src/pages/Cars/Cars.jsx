import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Cars.module.css';
import { CarList } from 'components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCars } from 'app/features/cars/selectors';
import { fetchCars } from 'app/features/cars/car-operations';

function Cars() {
  const carList = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <section>
      <div className={css.cars_container}>
        <ChooseForm />
        <CarList cars={carList} />
      </div>
    </section>
  );
}
export default Cars;
