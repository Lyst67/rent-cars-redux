import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Cars.module.css';
import { CarList } from 'components/CarList/CarList';

const cars = [{ a: '1' }, { b: '2' }, { c: '3' }, { d: '4' }];
const Cars = () => {
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
