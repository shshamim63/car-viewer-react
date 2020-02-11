import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import Login from './auth/Login';
import Registration from './auth/Registration';
import CarList from '../containers/CarList';
import AppointmentList from '../containers/AppointmentList';
import CarDetail from './CarDetail';
import CarAppointBooking from './CarAppointBooking';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/models" component={CarList} />
      <Route path="/cars/:id" component={CarDetail} />
      <Route path="/appointments" component={AppointmentList} />
      <Route
        exact
        path="/cars/:id/book"
        component={CarAppointBooking}
      />
    </BrowserRouter>
  </div>
);

export default App;
