import React from 'react';
import '../scss/Fashion.scss';
import SectionHeader from './SectionHeader';

const Fashion = props => {
  return (
    <div id="fashion">
      <SectionHeader
        title="fashion"
        subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <div className="categories">
        <div className="category">
          <div className="text">
            <p>STYLE</p>
          </div>
        </div>
        <div className="category">
          <div className="text">
            <p>TRENDS</p>
          </div>
        </div>
        <div className="category">
          <div className="text">
            <p>COLLECTIONS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
