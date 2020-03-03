import { GET_APPOINTMENTS, CREATE_APPOINTMENT } from '../actions/types';

const initialState = {
  appointment: null,
  appointments: [],
};

const appointment = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_APPOINTMENTS:
      return { ...state, appointments: payload };
    case CREATE_APPOINTMENT:
      return { ...state, appointment: payload };
    default:
      return state;
  }
};

export default appointment;
