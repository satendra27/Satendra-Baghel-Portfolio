import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>Satendra Baghel</span>
      </div>

      {/* Hamburger Menu */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact" style={{color:'black',backgroundColor:'white',padding: '7px 12px',borderRadius:'16px'}}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
