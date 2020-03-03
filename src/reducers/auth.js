import {
  LOGIN_SUCCESS,
  LOGGED_IN,
  LOG_OUT,
  REGISTER_SUCCESS,
} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  user: null,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { user: payload, isAuthenticated: true };
    case LOG_OUT:
      return { user: null, isAuthenticated: false };
    case LOGGED_IN:
      return { user: payload, isAuthenticated: true };
    default:
      return state;
  }
};

export default auth;
