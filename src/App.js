import React from 'react';
import './App.css';
import Showcase from './components/Showcase';
import Navbar from './components/Navbar';
import About from './components/About';
import Fashion from './components/Fashion';
import Lifestyle from './components/Lifestyle';

function App() {
  return (
    <div className="App">
      <Showcase />
      <Navbar />
      <About />
      <Fashion />
      <Lifestyle />
    </div>
  );
}

export default App;
