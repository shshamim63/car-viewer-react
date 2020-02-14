/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Header';
import { login } from '../../actions/auth';
import Background from '../../assets/landing.jpeg';

const backgroundImage = {
  backgroundImage: `url(${Background})`,
};

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
    <section className="site-hero" style={backgroundImage} id="section-home" data-stellar-background-ratio="0.5">
      <Header />
      <div className="container">
        <div className="row intro-text align-items-center justify-content-center">
          <div className="col-md-10 text-center">
            <h1 className="site-heading site-animate">
              <strong>Login with Email</strong>
            </h1>
            <form onSubmit={e => handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="email">
                  Enter Your Email
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
                  Enter Your Password
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
      </div>
    </section>
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
