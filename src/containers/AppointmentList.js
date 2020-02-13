import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAppointments } from '../actions/appointment';
import AppointmentItem from '../components/AppointmentItem';

const AppointmentList = ({ appointments, getAppointments }) => {
  useEffect(() => {
    getAppointments();
  }, []);
  return (
    <div className="Bookings">
      <div className="container">
        {appointments.map(appointment => (
          <AppointmentItem
            key={appointment.id}
            date={appointment.attributes.date}
            time={appointment.attributes.time}
            car={appointment.attributes.car}
            city={appointment.attributes.city}
          />
        ))}
      </div>
    </div>
  );
};
AppointmentList.propTypes = {
  getAppointments: PropTypes.func.isRequired,
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      attributes: PropTypes.object.isRequired,
    }).isRequired,
  ).isRequired,
};
const mapStateToProps = state => ({
  appointments: state.appointment.appointments,
});

export default connect(mapStateToProps, { getAppointments })(AppointmentList);
