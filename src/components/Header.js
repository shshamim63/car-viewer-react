/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';

import Authentication from './Authentication';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.mySidenav = React.createRef();
    this.main = React.createRef();
  }

  closeNav = () => {
    this.mySidenav.current.style.width = '0';
    this.main.current.style.width = '0';
  }

  preventcross = e => {
    e.preventDefault();
    this.closeNav();
  };

  openNav = () => {
    this.mySidenav.current.style.width = '250px';
    this.main.current.style.width = '250px';
  };

  render() {
    return (
      <header>
        <div ref={this.mySidenav} id="mySidenav" className="sidenav">
          <button type="submit" className="closebtn" onClick={this.preventcross}>&times;</button>
          <Link to="/models">Models</Link>
          <Link to="/">Lifestyle</Link>
          <Link to="/">Shop</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Appointments</Link>
          <Authentication />
        </div>
        <div id="main" ref={this.main}>
          <span className="closer" onClick={this.openNav}>&#9776;</span>
        </div>
      </header>
    );
  }
}

export default Header;
