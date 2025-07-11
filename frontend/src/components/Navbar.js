import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo"><a href="/">{'Satyam Saini'}</a></h1>
        <ul className="nav-menu">
          <li><a href="experience">Work Experience</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;