import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import { getCarList } from '../actions/car';
import Car from '../components/Car';

const CarList = ({ cars, getCarList }) => {
  useEffect(() => {
    getCarList();
  }, []);
  return (
    <section>
      <Header />
      <h1 className="text-center carlist-header">Latest Car</h1>
      <p className="text-center carlist-header-text">Please select a car model</p>
      <div className="container">
        <div className="row">
          {cars.map(car => (
            <Car key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
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
