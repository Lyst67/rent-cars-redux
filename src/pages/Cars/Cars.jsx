import { ChooseForm } from 'components/ChooseForm/ChooseForm';
import css from './Cars.module.css';
import { CarList } from 'components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectCars,
  selectCompleted,
  selectPage,
  selectisLoading,
} from 'app/features/cars/selectors';
import { fetchCars } from 'app/features/cars/car-operations';
import { removePage } from 'app/features/cars/carSlice';
import { Loader } from 'components/Loader/Loader';

function Cars() {
  const dispatch = useDispatch();
  const carList = useSelector(selectCars);
  const statePage = useSelector(selectPage);
  const isCompleted = useSelector(selectCompleted);
  const isLoading = useSelector(selectisLoading);
  const [filteredCars, setFilteredCars] = useState(carList);

  useEffect(() => {
    dispatch(removePage());
    dispatch(fetchCars({ complited: false, page: 1, limit: 12 }));
  }, [dispatch]);

  function handleLoadMore() {
    dispatch(fetchCars({ complited: isCompleted, page: statePage, limit: 12 }));
  }

  function handleChooseCar(brand, price, mileageFrom, mileageTo) {
    let chooseCars = carList.filter(car => {
      return (
        (!brand || car.make.toLowerCase() === brand) &&
        (!price ||
          parseFloat(car.rentalPrice.replace('$', '')) <= parseFloat(price)) &&
        (!mileageFrom || car.mileage >= mileageFrom.replace(',', '')) &&
        (!mileageTo || car.mileage <= mileageTo.replace(',', ''))
      );
    });
    if (!brand && !price && !mileageFrom && !mileageTo) {
      chooseCars = carList;
    }
    setFilteredCars(chooseCars);
  }

  // function handleChooseCar(brand, price, mileageFrom, mileageTo) {
  //   let chooseCars = carList.filter(car => {
  //     if (brand && car.make.toLowerCase() !== brand.toLowerCase()) {
  //       return false;
  //     }
  //     if (price && parseInt(car.rentalPrice.replace('$', '')) > price) {
  //       return false;
  //     }
  //     if (mileageFrom && parseInt(car.mileage) < mileageFrom.replace(',', '')) {
  //       return false;
  //     }
  //     if (mileageTo && parseInt(car.mileage) > mileageTo.replace(',', '')) {
  //       return false;
  //     }
  //     return true;
  //   });
  //   if (!brand && !price && !mileageFrom && !mileageTo) {
  //     chooseCars = carList;
  //   }
  //   setFilteredCars(chooseCars);
  // }

  return (
    <>
      {isLoading && <Loader />}
      <section className={css.section}>
        <div className={css.cars_container}>
          <ChooseForm onSubmit={handleChooseCar} />
          <CarList cars={filteredCars} />
          {!isCompleted && (
            <button
              type="button"
              onClick={handleLoadMore}
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
