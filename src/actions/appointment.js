/* eslint-disable import/prefer-default-export */
import Initialize from '../api/carViewerApi';

import { APPOINTMENTS } from '../constants';
import { GET_APPOINTMENTS, CREATE_APPOINTMENT } from './types';

export const getAppointments = () => async dispatch => {
  const response = await Initialize.get(
    `${APPOINTMENTS}`,
  );
  if (response.data.data) {
    dispatch({
      type: GET_APPOINTMENTS,
      payload: response.data.data,
    });
  }
};

export const createAppointment = appointmentinfo => async dispatch => {
  const response = await Initialize.post(
    `${APPOINTMENTS}`,
    {
      data: {
        attributes: {
          ...appointmentinfo,
        },
      },
    },
  );
  if (response.data.data) {
    dispatch({
      type: CREATE_APPOINTMENT,
      payload: response.data.data,
    });
  }
};
