import React from 'react';
import '../scss/Button.scss';

const Button = props => {
  return (
    <span className="btn-container">
      <button className={props.classes}>{props.text}</button>
    </span>
  );
};

export default Button;
