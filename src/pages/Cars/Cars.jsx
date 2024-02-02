import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Cars.module.css';
import { CarList } from 'components/CarList/CarList';

// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchCars } from 'redux/cars/operations';

const cars = [{ a: '1' }, { b: '2' }, { c: '3' }];

const Cars = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [dispatch]);
  return (
    <section>
      <div className={css.cars_container}>
        <ChooseForm />
        <CarList cars={cars} />
      </div>
    </section>
  );
};
export default Cars;
