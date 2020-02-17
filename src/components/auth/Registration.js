import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Header';
import { registration } from '../../actions/auth';
import Background from '../../assets/landing.jpeg';

const backgroundImage = {
  backgroundImage: `url(${Background})`,
};

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
    <section className="site-hero" style={backgroundImage} id="section-home" data-stellar-background-ratio="0.5">
      <Header />
      <div className="container">
        <div className="row intro-text align-items-center justify-content-center">
          <div className="col-md-10 text-center">
            <h1 className="site-heading site-animate">
              <strong>CREATE A ACCOUNT</strong>
            </h1>
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
      </div>
    </section>
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
