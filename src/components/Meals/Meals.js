import { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import Available from './AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <Available />
    </Fragment>
  );
};

export default Meals;
