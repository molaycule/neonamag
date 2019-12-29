import React, { Component } from 'react';
import '../scss/Navbar.scss';
import { Link } from 'react-scroll';
import Logo from '../img/logo-black.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      startOffsetTop: 0
    };
  }

  handleScroll() {
    // if (this.elem && this.elem.offsetTop > this.state.startOffsetTop) {
    //   this.elem.firstElementChild.classList.add('show');
    // } else {
    //   this.elem.firstElementChild.classList.remove('show');
    // }

    if (this.elem && window.scrollY >= this.state.startOffsetTop) {
      this.elem.firstElementChild.classList.add('show');
      this.elem.classList.add('fixed');
    } else {
      this.elem.firstElementChild.classList.remove('show');
      this.elem.classList.remove('fixed');
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({
      startOffsetTop: this.elem.offsetTop
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div
        className="navbar"
        data-aos="fade-in"
        data-aos-delay="500"
        ref={elem => {
          this.elem = elem;
        }}
      >
        <img src={Logo} alt="Logo" />
        <div className="navbar-container">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="nav-link"
          >
            ABOUT
          </Link>
          <Link
            activeClass="active"
            to="fashion"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="nav-link"
          >
            FASHION
          </Link>
          <Link
            activeClass="active"
            to="lifestyle"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="nav-link"
          >
            LIFESTYLE
          </Link>
          <Link
            activeClass="active"
            to="realestate"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="nav-link"
          >
            REAL ESTATE
          </Link>
          <Link
            activeClass="active"
            to="beauty"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="nav-link"
          >
            BEAUTY
          </Link>
          <Link
            activeClass="active"
            to="food"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="nav-link"
          >
            FOOD
          </Link>
          <Link
            activeClass="active"
            to="community"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="nav-link"
          >
            COMMUNITY
          </Link>
          <Link
            activeClass="active"
            to="pr"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="nav-link"
          >
            PR
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
