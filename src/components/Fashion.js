import React from 'react';
import '../scss/Fashion.scss';

const Fashion = props => {
  return (
    <div id="fashion">
      <div className="categories">
        <div className="category" data-aos="zoom-in">
          <div className="category-img1 img"></div>
          <p>STYLE</p>
        </div>
        <div className="category" data-aos="zoom-in" data-aos-delay="250">
          <div className="category-img2 img"></div>
          <p>TRENDS</p>
        </div>
        <div className="category" data-aos="zoom-in" data-aos-delay="500">
          <div className="category-img3 img"></div>
          <p>COLLECTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
