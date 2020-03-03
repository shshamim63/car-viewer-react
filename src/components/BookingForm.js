import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


import { createAppointment } from '../actions/appointment';
import { CITY } from '../constants';

const BookingForm = ({
  car, user, createAppointment,
}) => {
  const [value, setValue] = useState({
    time: '',
    date: '2019-01-01',
    city: '',
    redirect: false,
  });
  const {
    time, date, city, redirect,
  } = value;
  const handleSubmit = event => {
    event.preventDefault();
    const appointmentInfo = {
      date,
      time,
      city,
      car_id: car.id,
    };
    createAppointment(appointmentInfo);
    setValue({ ...value, redirect: true });
  };
  const handleChange = event => {
    event.preventDefault();
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Book An Appointment
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={e => handleSubmit(e)}>
                {user && redirect ? (<Redirect to="/appointments" />) : '' }
                <div className="form-group">
                  <label htmlFor="start" className="color-black">
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
                </div>
                <div className="form-group">
                  <label htmlFor="appt" className="color-black">
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
                </div>
                <div className="form-group">
                  <label htmlFor="city" className="color-black">
                    Select City
                    <select
                      id="city"
                      name="city"
                      className="w-100 h-full"
                      onChange={e => handleChange(e)}
                    >
                      {
          CITY.map(city => (
            <option key={city} value={city}>{ city }</option>
          ))
        }
                    </select>
                  </label>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
BookingForm.propTypes = {
  createAppointment: PropTypes.func.isRequired,
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    attributes: PropTypes.shape({
      modelname: PropTypes.string.isRequired,
      fee: PropTypes.number.isRequired,
      payable: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
      representative: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
const mapStateToProps = state => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, { createAppointment })(BookingForm);
