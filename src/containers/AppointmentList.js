import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAppointments } from '../actions/appointment';
import AppointmentItem from '../components/AppointmentItem';
import appointment from '../reducers/appointment';

const AppointmentList = ({ appointments, getAppointments }) => {
  useEffect(() => {
    getAppointments();
  }, []);
  console.log(appointments);
  return (
    <div className="Bookings">
      <div className="container">
        {appointments.map(appointment => (
          <AppointmentItem key={appointment.id} {...appointment.attributes} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  appointments: state.appointment.appointments,
});

export default connect(mapStateToProps, { getAppointments })(AppointmentList);
