import React from 'react';
import Button from './Button';
import Beauty1 from '../img/beauty-1.png';
import Beauty2 from '../img/beauty-2.png';
import Beauty3 from '../img/beauty-3.png';
import Beauty4 from '../img/beauty-4.png';
import Beauty5 from '../img/beauty-5.png';
import '../scss/Beauty.scss';

const Beauty = props => {
  return (
    <div id="beauty">
      <div className="grid-container">
        <span className="grid-content" data-aos="zoom-in">
          <img className="img-content" src={Beauty1} alt="beauty1"/>
        </span>
        <span className="grid-content" data-aos="zoom-in">
          <img className="img-content" src={Beauty2} alt="beauty2"/>
        </span>
        <span className="grid-content" data-aos="zoom-in">
          <img className="img-content" src={Beauty3} alt="beauty3"/>
        </span>
        <span className="grid-content" data-aos="zoom-in">
          <img className="img-content" src={Beauty4} alt="beauty4"/>
        </span>
        <span className="grid-content" data-aos="zoom-in">
          <img className="img-content" src={Beauty5} alt="beauty5"/>
        </span>
        <span className="grid-content" data-aos="zoom-in">
          <Button classes="btn secondary" text="View more" />
        </span>
      </div>
    </div>
  );
};

export default Beauty;
