import React from 'react';
import './App.css';
import Showcase from './components/Showcase';
import Navbar from './components/Navbar';
import About from './components/About';
import Fashion from './components/Fashion';
import Lifestyle from './components/Lifestyle';
import RealEstate from './components/RealEstate';
import Beauty from './components/Beauty';
import Food from './components/Food';
import Community from './components/Community';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

library.add(fab, faEnvelope, faPhoneAlt);

AOS.init(); // initialize animate on scroll

function App() {
  return (
    <div className="App">
      <Showcase />
      <Navbar />
      <About />
      <Fashion />
      <Lifestyle />
      <RealEstate />
      <Beauty />
      <Food />
      <Community />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
