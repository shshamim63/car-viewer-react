import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { showCar } from '../actions/car';
import carimage from '../assets/carsphoto.jpeg';
import backArrow from '../assets/back-arrow.png';

const CarDetail = ({
  match, selectedCar, authenticated, showCar,
}) => {
  useEffect(() => {
    showCar(match.params.id);
  }, []);
  return (
    <div>
      {selectedCar && (
        <div className="row">
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
              <h3 className="">{selectedCar.attributes.modelname}</h3>
              <p className="model-body">- £350 deposit upon any car purchase </p>
            </div>
            <div>
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
                  {(selectedCar.attributes.payable * selectedCar.attributes.duration) + selectedCar.attributes.fee}
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
            <Link to={{
              pathname: `/cars/${selectedCar.id}/book`,
              state: { car: selectedCar },
            }}
            >
              <button className="btn btn-small btn-info">Book a test drive</button>
            </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedCar: state.car.selectedCar,
  authenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { showCar })(CarDetail);
