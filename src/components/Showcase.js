import React, { Component } from 'react';
import '../scss/Showcase.scss';

class Showcase extends Component {
  state = {
    slides: [],
    intervalTime: 5000,
    slideInterval() {}
  };

  nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
      // Add current to next sibling
      current.nextElementSibling.classList.add('current');
    } else {
      // Add current to start
      this.state.slides[0].classList.add('current');
    }
  };

  componentDidMount() {
    this.setState({
      slides: document.querySelectorAll('.showcase-slide'),
      slideInterval: setInterval(this.nextSlide, this.state.intervalTime)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.slideInterval);
  }

  render() {
    return (
      <div className="showcase" data-aos="fade-in">
        <div className="showcase-slide current">
          <div className="showcase-content">
            <h1>NEONA IS FASHION</h1>
            <p>
              Neona shares the picture perfect life with a blend of beautiful
              realities
            </p>
          </div>
        </div>
        <div className="showcase-slide">
          <div className="showcase-content">
            <h1>NEONA IS LIFESTYLE</h1>
            <p>
              Neona shares the picture perfect life with a blend of beautiful
              realities
            </p>
          </div>
        </div>
        <div className="showcase-slide">
          <div className="showcase-content">
            <h1>NEONA IS REAL ESTATE</h1>
            <p>
              Neona shares the picture perfect life with a blend of beautiful
              realities
            </p>
          </div>
        </div>
        <div className="showcase-slide">
          <div className="showcase-content">
            <h1>NEONA IS BEAUTY</h1>
            <p>
              Neona shares the picture perfect life with a blend of beautiful
              realities
            </p>
          </div>
        </div>
        <div className="showcase-slide">
          <div className="showcase-content">
            <h1>NEONA IS FOOD</h1>
            <p>
              Neona shares the picture perfect life with a blend of beautiful
              realities
            </p>
          </div>
        </div>
        <div className="showcase-slide">
          <div className="showcase-content">
            <h1>NEONA IS COLOR</h1>
            <p>
              Neona shares the picture perfect life with a blend of beautiful
              realities
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
