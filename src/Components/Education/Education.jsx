import React from 'react';
import './Education.css';

const educationData = [
  {
    level: "B.Tech in Computer Science",
    institution: "Poornima Institute of Engineering and Technology",
    duration: "2022 – Present",
    details: "Currently pursuing B.Tech with specialization in AI & DS"
  },
  {
    level: "Senior Secondary (Class 12)",
    institution: "N B N Senior Secondary School",
    duration: "2021 – 2022",
    details: "RBSE Board | PCM | Scored 88.20%"
  },
  {
    level: "Secondary (Class 10)",
    institution: "N B N Senior Secondary School",
    duration: "2019 – 2020",
    details: "RBSE Board | Scored 89.83%"
  }
];

const Education = () => {
  return (
    <section className="education-card-section" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-cards">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.level}</h3>
            <h4>{edu.institution}</h4>
            <span className="edu-duration">{edu.duration}</span>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
