import { GET_CARS, SHOW_CAR } from '../actions/types';

const initialState = {
  selectedCar: null,
  getCars: [],
};

const car = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CARS:
      return { ...state, getCars: payload };
    case SHOW_CAR:
      return { ...state, selectedCar: payload };
    default:
      return state;
  }
};

export default car;
