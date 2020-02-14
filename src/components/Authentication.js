/* eslint-disable react/require-default-props */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../actions/auth';

const Authentication = ({ logout, isAuthenticated, history }) => {
  const handleClick = () => {
    logout();
    history.push('/landing');
  };
  const renderOnAuth = () => {
    if (!isAuthenticated) {
      return (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/registration">SignUp</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/appointments">Appointments</Link>
        <button className="" type="submit" onClick={handleClick}>Logout</button>
      </div>
    );
  };

  return (
    <div>{renderOnAuth()}</div>
  );
};

Authentication.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, { logout })(Authentication));
