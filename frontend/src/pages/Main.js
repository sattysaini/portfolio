import React from 'react';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';

function Main() {
  return (
    <div className="main-container">
      <Home />
      <div id="experience-section">
        <Experience />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default Main;