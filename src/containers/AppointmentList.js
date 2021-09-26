import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAppointments } from '../actions/appointment';
import AppointmentItem from '../components/AppointmentItem';
import Header from '../components/Header';

const AppointmentList = ({ appointments, getAppointments }) => {
  useEffect(() => {
    getAppointments();
  }, []);
  return (
    <div className="Bookings">
      <Header />
      <div className="container mt-4">
        <h3 className="text-center">Appointments</h3>
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">City</th>
              <th scope="col">Model</th>
              <th scope="col">Representative</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <AppointmentItem
                key={appointment.id}
                date={appointment.attributes.date}
                time={appointment.attributes.time}
                car={appointment.attributes.car}
                city={appointment.attributes.city}
              />
            ))}
          </tbody>
        </table>
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
      // attributes: PropTypes.object.isRequired,
    }).isRequired,
  ).isRequired,
};
const mapStateToProps = state => ({
  appointments: state.appointment.appointments,
});

export default connect(mapStateToProps, { getAppointments })(AppointmentList);
