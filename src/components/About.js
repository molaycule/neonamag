import React from 'react';
import '../scss/About.scss';

const About = props => {
  return (
    <div id="about" data-aos="fade-in" data-aos-delay="1000">
      <h2 className="title">About Neona</h2>
      <p className="text">
        Neona Magazine is a high-end content journal, covering local and foreign
        social scenes, culture, traditions, and high social etiquettes; we are
        an agency consisting of young minds aimed at connecting Beauty, Fashion,
        Lifestyle, Real Estate, Food and Tech through well-edited text, images,
        and colors.
      </p>
      <h2 className="title">What makes Neona stand out?</h2>
      <p className="text">
        Unlike other brands we can give a total amount of an accurate and
        organic reach of our influence and interaction, this has been gifted to
        us by the community system we adapt. We believe in the power of unity
        and influence by affiliation that’s why we have one of the biggest
        modern communities with a reach spreading over 100,000+ active
        subscribers and Impression of 23.7 million.
      </p>
    </div>
  );
};

export default About;
