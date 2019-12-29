import React from 'react';
import Button from './Button';
import '../scss/RealEstate.scss';

const RealEstate = props => {
  return (
    <div id="realestate" data-aos="fade-in">
      <h1>Find Your Perfect Home</h1>
      <p>Neona takes you through a stream of luxurious homes through real estate and architecture.</p>
      <Button classes="btn primary" text="Browse listings" />
    </div>
  );
};

export default RealEstate;
