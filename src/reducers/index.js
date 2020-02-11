import { combineReducers } from 'redux';
import auth from './auth';
import car from './car';

export default combineReducers({
  auth,
  car,
});
