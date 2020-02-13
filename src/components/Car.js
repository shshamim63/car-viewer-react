import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import carImage from '../assets/carsphoto.jpeg';

const Car = ({ car }) => {
  const { modelname, description } = car.attributes;
  const { id } = car;
  return (
    <div className="col-md-4">
      <Link
        to={`/cars/${id}`}
      >
        <div className="card">
          <img src={carImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{modelname}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
Car.propTypes = {
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

};

export default Car;
