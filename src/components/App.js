import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './auth/Login';
import Registration from './auth/Registration';
import CarList from '../containers/CarList';
import AppointmentList from '../containers/AppointmentList';
import CarDetail from './CarDetail';


const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/models" component={CarList} />
      <Route path="/cars/:id" component={CarDetail} />
      <Route path="/appointments" exact component={AppointmentList} />
    </BrowserRouter>
  </div>
);

export default App;
