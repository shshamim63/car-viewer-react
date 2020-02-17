import { combineReducers } from 'redux';
import auth from './auth';
import car from './car';
import appointment from './appointment';

export default combineReducers({
  auth,
  car,
  appointment,
});
