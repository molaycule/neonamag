import React from 'react';
import '../scss/About.scss';
import magazine from '../img/mag-1.png';

const About = props => {
  return (
    <div id="about">
      <div className="about-left">
        <img src={magazine} alt="magazine" />
      </div>
      <div className="about-right">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          dolores sed quia eos repudiandae quidem consequatur voluptates quod ex
          obcaecati! Error aperiam earum necessitatibus voluptates maiores
          laboriosam impedit atque totam!
        </p>
        <div className="action-buttons">
          <button className="btn primary">GET IT NOW</button>
          <button className="btn secondary">VIEW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default About;
