import React from 'react';
import './Experience.css';

const experienceData = [
  {
    company: "IIHT",
    role: "Python Programming Intern",
    duration: "Jan 2024 – Mar 2024",
    description: "Successfully completed a 15-day internship in Python Programming. Gained practical experience in core Python concepts such as data types, control structures, functions, file handling, and object-oriented programming. Worked on small-scale projects and problem-solving using Python."
  },
  {
    company: "RegexSoftware Services",
    role: "Machine Learning and Deep Learning Intern",
    duration: "08 July 2024 – 26 August 2024",
    description: "Completed an internship focused on Machine Learning and Deep Learning using Python. Gained hands-on experience in data cleaning, feature engineering, and model building with Scikit-learn, TensorFlow, and Keras. Worked on data visualization using Matplotlib and Seaborn, and developed predictive models for real-world datasets."
  },
  {
    company: "Celebal Technologies",
    role: "Data Science Intern",
    duration: "19 May 2025 – 20 July 2025",
    description: "Completed a 2-month virtual internship in Data Science, where I worked on data collection, cleaning, and analysis using Python. Applied key data science concepts such as exploratory data analysis (EDA), data visualization with Matplotlib and Seaborn, and built machine learning models for classification and prediction tasks. Gained hands-on experience in tools like Pandas, NumPy, Scikit-learn, and Jupyter Notebook."
  }
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
              <span className="timeline-date">{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
