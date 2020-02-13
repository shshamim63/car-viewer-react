import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { createAppointment } from '../actions/appointment';

const BookingForm = ({ car, user, createAppointment }) => {
  const [value, setValue] = useState({
    time: '',
    date: '2019-01-01',
  });
  const { time, date } = value;
  const handleSubmit = event => {
    event.preventDefault();
    const appointmentInfo = {
      date,
      time,
      car_id: car.id,
    };
    console.log(appointmentInfo);
    createAppointment(appointmentInfo);
    return (<Redirect to="/appointments" />);
  };
  const handleChange = event => {
    event.preventDefault();
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="start">
        Select date:
        <input
          type="date"
          id="start"
          name="date"
          value={date}
          min="2019-02-07"
          max="2025-12-31"
          onChange={e => handleChange(e)}
        />
      </label>
      <label htmlFor="appt">
        Choose a time:
        <input
          type="time"
          id="appt"
          name="time"
          min="09:00"
          max="18:00"
          onChange={e => handleChange(e)}
          required
        />
      </label>
      <button type="submit" className="btn btn-small btn-info">Book a test drive</button>
    </form>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, { createAppointment })(BookingForm);