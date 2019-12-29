import React from 'react';
import '../scss/Button.scss';

const Button = props => {
  const divStyle = {
    display: 'inline'
  }

  return (
    <div className="btn-container" style={divStyle}>
      <button className={props.classes}>{props.text}</button>
    </div>
  );
};

export default Button;
