import React from 'react';
import '../scss/Navbar.scss';
import { Link } from 'react-scroll';

const Navbar = props => {
  return (
    <div className="navbar">
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-link"
      >
        ABOUT
      </Link>
      <Link
        activeClass="active"
        to="fashion"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-link"
      >
        FASHION
      </Link>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-link"
      >
        LIFESTYLE
      </Link>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-link"
      >
        REAL ESTATE
      </Link>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-link"
      >
        BEAUTY
      </Link>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-link"
      >
        FOOD
      </Link>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-link"
      >
        COMMUNITY
      </Link>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="nav-link"
      >
        PR
      </Link>
    </div>
  );
};

export default Navbar;
