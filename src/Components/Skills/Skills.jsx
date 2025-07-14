import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', level: 90, icon: 'fa-html5', color: '#e34c26' },
  { name: 'CSS', level: 80, icon: 'fa-css3-alt', color: '#264de4' },
  { name: 'JavaScript', level: 75, icon: 'fa-js', color: '#f0db4f' },
  { name: 'React', level: 60, icon: 'fa-react', color: '#61DBFB' },
  { name: 'Java', level: 80, icon: 'fa-brands fa-java', color: '#007396' },
  { name: 'Python', level: 85, icon: 'fa-python', color: '#3776AB' },
{ name: 'Machine Learning', level: 80, icon: 'fas fa-brain', color: '#f39c12' },
{ name: 'Excel', level: 90, icon: 'fa-file-excel', color: '#217346' },
{ name: 'Power BI', level: 85, icon: 'fa-chart-column', color: '#F2C811' }


];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skill Set</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <div className="skill-info">
              <i
                className={`fab ${skill.icon}`}
                style={{ color: skill.color }}
              ></i>
              <span>{skill.name}</span>
              <span className="percentage">{skill.level}%</span>
            </div>
            <div className="bar">
              <div
                className="filled"
                style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
