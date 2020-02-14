import React from 'react';
import PropTypes from 'prop-types';

const AppointmentItem = ({
  date,
  time,
  city,
  car,
}) => (
  <tr className="table-info">
    <td>{date}</td>
    <td>{time}</td>
    <td>{city}</td>
    <td>{car.modelname}</td>
    <td>{car.representative}</td>
  </tr>
);

AppointmentItem.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  car: PropTypes.shape({
    modelname: PropTypes.string.isRequired,
    representative: PropTypes.string.isRequired,
  }).isRequired,
};

export default AppointmentItem;
