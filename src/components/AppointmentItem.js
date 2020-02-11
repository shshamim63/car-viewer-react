import React from 'react';

const AppointmentItem = ({
  date,
  time,
  user,
  car,
}) => (
  <div>
    <p>{date}</p>
    <p>{time}</p>
    <p>{car.modelname}</p>
  </div>
);

export default AppointmentItem;
