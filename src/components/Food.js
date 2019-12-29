import React from 'react';
import Button from './Button';
import '../scss/Food.scss';

const Food = props => {
  return (
    <div id="food" data-aos="fade-in">
      <h1>Food Masterclass</h1>
      <p>Join Neona Masterclass for both local and international dishes.</p>
      <Button classes="btn primary" text="Go to masterclass" />
    </div>
  );
}

export default Food;