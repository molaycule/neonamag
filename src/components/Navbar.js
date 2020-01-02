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
    // if (this.navbarElement && this.navbarElement.offsetTop > this.state.startOffsetTop) {
    //   this.navbarElement.firstElementChild.classList.add('show');
    // } else {
    //   this.navbarElement.firstElementChild.classList.remove('show');
    // }

    if (this.navbarElement.lastElementChild.classList.contains('change')) {
      this.removeMobileNav();
    }
    
    if (this.navbarElement && window.scrollY >= this.state.startOffsetTop) {
      this.navbarElement.firstElementChild.classList.add('show');
      this.navbarElement.classList.add('fixed');
      if (document.documentElement.clientWidth <= 480) {
        // mobile screen less than or equal to 480px
        this.navbarElement.lastElementChild.classList.add('menu-bar-show');
      }
    } else {
      this.navbarElement.firstElementChild.classList.remove('show');
      this.navbarElement.classList.remove('fixed');
      if (document.documentElement.clientWidth <= 480) {
        // mobile screen less than or equal to 480px
        this.navbarElement.lastElementChild.classList.remove('menu-bar-show');
      }
    }
  }

  toggleMenuIcon() {
    console.log('p');
    this.navbarElement.lastElementChild.classList.toggle('change');
    if (this.navbarElement.lastElementChild.classList.contains('change')) {
      if (document.documentElement.clientWidth <= 480) {
        // mobile screen less than or equal to 480px
        this.navbarElement.classList.add('mobile-nav');
      }
    } else {
      if (document.documentElement.clientWidth <= 480) {
        // mobile screen less than or equal to 480px
        this.navbarElement.classList.remove('mobile-nav');
      }
    }
  }

  removeMobileNav() {
    if (document.documentElement.clientWidth <= 480) {
      // mobile screen less than or equal to 480px
      this.navbarElement.classList.remove('mobile-nav');
      this.navbarElement.lastElementChild.classList.toggle('change');
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({
      startOffsetTop: this.navbarElement.offsetTop
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
          this.navbarElement = elem;
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
            onClick={() => {
              this.removeMobileNav();
            }}
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
            onClick={() => {
              this.removeMobileNav();
            }}
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
            onClick={() => {
              this.removeMobileNav();
            }}
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
            onClick={() => {
              this.removeMobileNav();
            }}
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
            onClick={() => {
              this.removeMobileNav();
            }}
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
            onClick={() => {
              this.removeMobileNav();
            }}
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
            onClick={() => {
              this.removeMobileNav();
            }}
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
            onClick={() => {
              this.removeMobileNav();
            }}
          >
            PR
          </Link>
        </div>
        <div
          className="menu-bar"
          onClick={() => {
            this.toggleMenuIcon();
          }}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
