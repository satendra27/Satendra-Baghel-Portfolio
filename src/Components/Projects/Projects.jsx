import React from 'react';
import './Projects.css';
import chatbot from '../../assets/Chatbot project.png';
import phishing from '../../assets/Phishing url.png';
import spotify from '../../assets/Spotify Data Analysis Power Bi.png'
import accident from '../../assets/Road Accident Data Analysis.png'

const projectData = [
  {
    title: "Gemini Chatbot",
    type: "AI Chat Assistant",
    description: "Gemini is an intelligent AI-powered chatbot built to simulate human-like conversation using advanced natural language processing techniques. Designed for a seamless user experience, the chatbot can answer queries, hold contextual conversations, and assist with tasks across various domains. It supports dynamic interaction through a clean, responsive UI built with React, and leverages machine learning models for language understanding.",
    image: chatbot,
    tags: ["HTML", "CSS", "Javascript", "Machine Learning", "Flask", "Chatbot"],
    link:"https://chatbot-1-l8t8.onrender.com/"
  },
  {
    title: "Phishing URL Detection",
    type: "Machine Learning Project",
    description: "This project is a web-based Phishing URL Detection System developed using Machine Learning and Flask. It analyzes URLs in real-time to determine whether they are legitimate or potentially malicious. The system extracts important features from the URL and classifies it using a trained machine learning model. The user interface is built with HTML/CSS and styled to be responsive and user-friendly, allowing users to input URLs and instantly receive a prediction along with confidence level.",
    image: phishing,
    tags: ['Machine Learning', 'Flask', 'HTML', 'CSS', 'Cybersecurity', 'URL Analysis', 'Python'],
    link:"https://phishing-url-detection-using-ml-1.onrender.com/"
  },{
    title: "Spotify Data Analysis",
    type: "Data Visualization / Analytics",
    description: "This project focuses on analyzing and visualizing Spotify music data using Power BI. It provides deep insights into track popularity, audio features (such as danceability, energy, tempo), and trends across genres, artists, and release years. Interactive dashboards were built to help users explore listening patterns and discover correlations in Spotify’s dataset. The visuals are designed to be clean, informative, and fully interactive for decision-making or exploratory analysis.",
    image: spotify,
    tags: ['Power BI', 'Data Analysis', 'Spotify API', 'Data Visualization', 'DAX'],
    link:"https://github.com/satendra27/Spotify-Power-BI-Dashboard.git"
  },{
    title: "Road Accident Data Analysis",
    type: "Data Analytics",
    description: "This project analyzes road accident data using Microsoft Excel to identify key trends and insights related to accident severity, causes, time of occurrence, and affected locations. The analysis includes visual dashboards with charts, pivot tables, slicers, and conditional formatting to make the data interactive and easily understandable. It helps uncover patterns such as peak accident times, high-risk areas, and contributing factors, aiding in strategic planning and preventive measures.",
    image: accident,
    tags: ['Excel', 'Data Analysis', 'Dashboard', 'Pivot Tables', 'Charts', 'Road Safety'],
    link:"https://github.com/satendra27/Road-Accident-Data-Analysis-using-Excel.git"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Latest Works</h2>

      {projectData.map((project, index) => (
        <div
          className={`project-item ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
          key={index}
        >
          <div className="project-image">
             <a href={project.link} target="_blank" rel="noopener noreferrer">
    <img src={project.image} alt={project.title} />
  </a>
          </div>

          <div className="project-details">
            <h3>{project.title} <span>({project.type})</span></h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
