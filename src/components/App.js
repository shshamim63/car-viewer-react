import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import Login from './auth/Login';
import Registration from './auth/Registration';
import CarList from '../containers/CarList';
import AppointmentList from '../containers/AppointmentList';
import Car from './Car';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/models" component={CarList} />
      <Route path="/cars/:id" component={Car} />
      <Route path="/appointments" component={AppointmentList} />
    </BrowserRouter>
  </div>
);

export default App;
