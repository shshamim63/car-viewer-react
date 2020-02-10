import React from 'react';
import { Link } from 'react-router-dom';

const Authentication = () => (
  <div>
    <Link to="/login">Login</Link>
    <Link to="/registration">SignUp</Link>
    <Link to="/">Logout</Link>
  </div>
);

export default Authentication;
