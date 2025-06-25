import React from 'react';
import './Hero.css';
import { ReactTyped } from "react-typed";
import Satendra from '../../assets/profile.png'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1>Hi, My Name is <span className="highlight">Satendra Baghel</span></h1>
        <h2 className="typed-text">
          <span style={{ color: "black" }}>I'm a </span>
          <ReactTyped
            strings={['Frontend Developer', 'Data Scientist', 'Data Analyst']}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        <p>I am a passionate and results-driven Frontend Developer, Data Scientist, and Data Analyst. 
  With a strong foundation in web technologies and data-driven solutions, I specialize in building responsive web interfaces, solving real-world problems using machine learning, and transforming raw data into meaningful insights. 
  I love turning ideas into reality through clean code, data, and design.</p>
        <div className="social-icons">
          <a className='linkedin' href="https://www.linkedin.com/in/satendra-baghel-1a29b1256/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          <a className='github' href="https://github.com/satendra27" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
          <a className='youtube' href="https://www.youtube.com/@ThinkGrow797" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a>
          <a className='instagram' href="https://www.instagram.com/Satendra%20baghel" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
          <a className='facebook' href="https://www.facebook.com/satendra.baghel.3152130" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
        </div>
        <a
          href="/Satendra Baghel (2).pdf"
          className="download-btn"
        >
          <i class="fas fa-download"></i> Download Resume
        </a>
      </div>


      <div className="hero-right">
  <img src={Satendra} alt="Satendra Baghel" className="profile-image" />
</div>
    </section>
  );
};

export default Hero;
