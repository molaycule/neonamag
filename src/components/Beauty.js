import React from 'react';
import Button from './Button';
import '../scss/Beauty.scss';

const Beauty = props => {
  return (
    <div id="beauty">
      <div className="grid-container">
        <div className="grid-content" data-aos="zoom-in">
          <div className="img-content"></div>
        </div>
        <div className="grid-content" data-aos="zoom-in">
          <div className="img-content"></div>
        </div>
        <div className="grid-content" data-aos="zoom-in">
          <div className="img-content"></div>
        </div>
        <div className="grid-content" data-aos="zoom-in">
          <div className="img-content"></div>
        </div>
        <div className="grid-content" data-aos="zoom-in">
          <div className="img-content"></div>
        </div>
        <div className="grid-content" data-aos="zoom-in">
          <Button classes="btn secondary" text="View more" />
        </div>
      </div>
    </div>
  );
};

export default Beauty;
