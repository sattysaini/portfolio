import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="nav-logo" onClick={() => scrollToSection('home-section')}>Satyam Saini</button>
        <ul className="nav-menu">
          <li><button onClick={() => scrollToSection('experience-section')}>Work Experience</button></li>
          <li><button onClick={() => scrollToSection('contact-section')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;