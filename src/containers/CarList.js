import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCarList } from '../actions/car';
import Car from '../components/Car';

const CarList = ({ cars, getCarList }) => {
  useEffect(() => {
    getCarList();
  }, []);
  return (
    <div className="container">
      <h1>Latest Car</h1>
      <div className="row">
        {cars.map(car => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

CarList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  getCarList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cars: state.car.getCars,
});

export default connect(mapStateToProps, { getCarList })(CarList);
