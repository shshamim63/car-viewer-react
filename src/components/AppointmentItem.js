import React from 'react';
import PropTypes from 'prop-types';

const AppointmentItem = ({
  date,
  time,
  city,
  car,
}) => (
  <div>
    <p>{date}</p>
    <p>{time}</p>
    <p>{city}</p>
    <p>{car.modelname}</p>
  </div>
);

AppointmentItem.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  car: PropTypes.shape({
    modelname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AppointmentItem;
