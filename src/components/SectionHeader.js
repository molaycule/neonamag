import React from 'react';
import '../scss/SectionHeader.scss';

const SectionHeader = props => {
  return (
    <div className="section-header">
      <h3>{props.title.toUpperCase()}</h3>
      <p>{props.subtext}</p>
    </div>
  );
};

export default SectionHeader;
