import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Satendra Baghel</h3>
        <p>Frontend Developer | Data Scientist | Data Analyst</p>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/satendra-baghel-1a29b1256/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/satendra27" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:baghelsatendra27@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Satendra Baghel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
