/* eslint-disable import/prefer-default-export */
import Initialize from '../api/carViewerApi';

import { CARS } from '../constants';
import { GET_CARS, SHOW_CAR } from './types';

export const getCarList = () => async dispatch => {
  const response = await Initialize.get(
    `${CARS}`,
  );
  if (response.data.data) {
    dispatch({
      type: GET_CARS,
      payload: response.data.data,
    });
  }
};

export const showCar = id => async dispatch => {
  const response = await Initialize.get(
    `${CARS}/${id}`,
  );
  if (response.data) {
    dispatch({
      type: SHOW_CAR,
      payload: response.data.data,
    });
  }
};
