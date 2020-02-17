import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { showCar } from '../actions/car';
import Header from './Header';
import carimage from '../assets/carsphoto.jpeg';
import backArrow from '../assets/back-arrow.png';
import BookingForm from './BookingForm';

const CarDetail = ({
  match, selectedCar, authenticated, showCar,
}) => {
  useEffect(() => {
    showCar(match.params.id);
  }, []);
  return (
    <div className="container">
      <Header />
      {selectedCar && (
        <div className="row detail-space">
          <div className="col-md-9">
            <img src={carimage} className="card-img-top" alt="..." />
            <Link to="/models">
              <div className="back-arrow-container">
                <img src={backArrow} className="back-arrow" alt="..." />
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <div className="detail-header text-align-right">
              <h3 className="modelname">{selectedCar.attributes.modelname}</h3>
              <p className="model-body model-body-text">- £350 deposit upon any car purchase </p>
            </div>
            <div className="model-body-text">
              <p className="textbox alignleft odd">
                Finance Fee
                <span className="alignright">
                  `£
                  {' '}
                  {selectedCar.attributes.fee}
                  `
                </span>
              </p>
              <p className="textbox alignleft">
                Option to purchase fee
                <span className="alignright">
                  `£
                  {' '}
                  {selectedCar.attributes.payable}
                  `
                </span>
              </p>
              <p className="textbox alignleft odd">
                Total amount Payable
                <span className="alignright">
                  `£
                  {' '}
                  {(selectedCar.attributes.payable
                    * selectedCar.attributes.duration) + selectedCar.attributes.fee}
                  `
                </span>
              </p>
              <p className="textbox alignleft odd">
                Duration
                <span className="alignright">
                  `
                  {selectedCar.attributes.duration}
                  {' '}
                  Months`
                </span>
              </p>
              <p className="textbox alignleft">
                <span style={{ fontWeight: 'bold' }}>Representative</span>
                <span className="alignright">
                  {selectedCar.attributes.representative}
                </span>
              </p>
            </div>
            {authenticated && (
              <BookingForm car={selectedCar} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
CarDetail.defaultProps = {
  selectedCar: null,
  authenticated: null,
};
CarDetail.propTypes = {
  showCar: PropTypes.func.isRequired,
  selectedCar: PropTypes.shape({
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
  }),
  authenticated: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
const mapStateToProps = state => ({
  selectedCar: state.car.selectedCar,
  authenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { showCar })(CarDetail);
