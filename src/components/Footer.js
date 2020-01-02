import React, { Component } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../scss/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div id="footer" data-aos="fade-up">
        <h1>Contact Us</h1>
        <div className="footer-container">
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <Button classes="btn primary" text="Send" />
            </form>
          </div>
          <div className="contact-infos">
            <h3>
              Want to be a Neona Ambassador?{' '}
              <span>
                <a
                  href="https://forms.gle/S1ZUoXnzjuxiRm2V8"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="color-form-link"
                >
                  Fill out the form
                </a>
              </span>
            </h3>
            <div className="info">
              <FontAwesomeIcon icon="envelope" size="2x" color="#F79D5C" />
              <a
                href="mailto:=admin@neonamag.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>admin@neonamag.com</p>
              </a>
            </div>
            <div className="info">
              <FontAwesomeIcon icon="phone-alt" size="2x" color="#F79D5C" />
              <a
                href="tel:+2348130706352"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>+2348130706352</p>
              </a>
              <span> </span>
              <a
                href="tel:+2348144485080"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p id="second-num">+2348144485080</p>
              </a>
            </div>
            <div className="connect">
              <p>connect with us</p>
              <a
                href="https://instagram.com/neonamag?igshid=18enaczza2f1i"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  size="3x"
                  color="#F79D5C"
                  style={{ marginRight: '1rem' }}
                />
              </a>
              <a
                href="https://twitter.com/NeonaMagazine?s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  size="3x"
                  color="#F79D5C"
                  style={{ marginRight: '1rem' }}
                />
              </a>
              <a
                href="https://soundcloud.com/user-572626255"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={['fab', 'soundcloud']}
                  size="3x"
                  color="#F79D5C"
                  style={{ marginRight: '1rem' }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-banner">
          <p>Neona Magazine &amp; PR, copyright 2019</p>
        </div>
      </div>
    );
  }
}

export default Footer;
