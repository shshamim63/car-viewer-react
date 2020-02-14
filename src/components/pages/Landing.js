import React from 'react';
import Header from '../Header';
import Background from '../../assets/landing.jpeg';

const backgroundImage = {
  backgroundImage: `url(${Background})`,
};

const Landing = () => (
  <section className="site-hero" style={backgroundImage} id="section-home" data-stellar-background-ratio="0.5">
    <Header />
    <div className="container">
      <div className="row intro-text align-items-center justify-content-center">
        <div className="col-md-10 text-center">
          <h1 className="site-heading site-animate">
            <strong>THE NEW CAR TRADIENT </strong>
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
