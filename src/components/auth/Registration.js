import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { registration } from '../../actions/auth';

const Registration = ({ registration, isAuthenticated }) => {
  const [value, setValue] = useState({
    username: '',
    email: '',
    password: '',
    confirmation: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    registration({ ...value });
  };

  const handleChange = event => {
    event.preventDefault();
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const {
    username, email, password, confirmation,
  } = value;
  return (
    <div>
      <div>
        <h2>Create Account</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="username">
              User Name:
              <input
                id="username"
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter a username"
                value={username}
                onChange={e => handleChange(e)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your email
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={e => handleChange(e)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Your password
              <input
                id="password"
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={e => handleChange(e)}
                minLength="6"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="confirmation">
              Confirm Password
              <input
                id="confirmation"
                type="password"
                name="confirmation"
                className="form-control"
                placeholder="Enter your password again"
                value={confirmation}
                onChange={e => handleChange(e)}
                minLength="6"
                required
              />
            </label>
          </div>
          <input type="submit" value="Signup" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

Registration.defaultProps = {
  isAuthenticated: null,
};
Registration.propTypes = {
  registration: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { registration })(Registration);
