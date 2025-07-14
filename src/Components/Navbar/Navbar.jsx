import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>Satendra Baghel</span>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>

      {/* Nav Links */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a title='Home' href="#hero" onClick={handleLinkClick}>Home</a></li>
        <li><a title='Skills' href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a title='Projects' href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a title='Experience' href="#experience" onClick={handleLinkClick}>Experience</a></li>
        <li><a title='Education' href="#education" onClick={handleLinkClick}>Education</a></li>
        <li>
          <a title='Contact'
            href="#contact"
            onClick={handleLinkClick}
            style={{
              color: 'black',
              backgroundColor: 'white',
              padding: '7px 12px',
              borderRadius: '16px',
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
