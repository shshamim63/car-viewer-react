/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = event => {
    event.preventDefault();
    login({ ...value });
  };

  const handleChange = event => {
    event.preventDefault();
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const { email, password } = value;
  return (
    <div>
      <div>
        <h2>Login with Email</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="email">
              Your email
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                className="form-control"
                onChange={e => handleChange(e)}
                required
              />
              <small id="emailHelp" className="form-text text-muted"> We will never share your email with anyone else.</small>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Your password
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                className="form-control"
                onChange={e => handleChange(e)}
                minLength="6"
                required
              />
            </label>
          </div>
          <input type="submit" value="Login" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
