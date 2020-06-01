/* eslint-disable import/prefer-default-export */
import Initialize from '../api/carViewerApi';
import {
  LOGIN, STATUS, LOGOUT, REGISTER,
} from '../constants';
import {
  LOGIN_SUCCESS, LOGGED_IN, LOG_OUT, REGISTER_SUCCESS,
} from './types';

export const loggedIn = () => async dispatch => {
  const response = await Initialize.get(
    `${STATUS}`,
  );
  if (response.data.logged_in) {
    dispatch({
      type: LOGGED_IN,
      payload: response.data.user,
    });
  }
};

export const login = ({ email, password }) => async dispatch => {
  const response = await Initialize.post(
    `${LOGIN}`,
    {
      user: {
        email,
        password,
      },
    },
  );
  if (response.data.status === 'created') {
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
    dispatch(loggedIn);
    localStorage.setItem('isLoggedIn', true);
  }
};

export const registration = ({
  username, email, password, passwordConfirmation,
}) => async dispatch => {
  const response = await Initialize.post(
    `${REGISTER}`,
    {
      user: {
        username,
        email,
        password,
        passwordConfirmation,
      },
    },
  );
  if (response.data.status === 'created') {
    dispatch({ type: REGISTER_SUCCESS, payload: response.data.user });
    dispatch(loggedIn);
    localStorage.setItem('isLoggedIn', true);
  }
};

export const logout = () => async dispatch => {
  await Initialize.delete(
    `${LOGOUT}`,
  );
  dispatch({ type: LOG_OUT });
  localStorage.setItem('isLoggedIn', false);
};
