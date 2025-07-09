import React, { useState, useEffect } from 'react';
import { getExperienceData } from '../services/api';
import './Experience.css';

function Experience() {
  const [experienceData, setExperienceData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getExperienceData()
      .then(response => {
        setExperienceData(response.data);
      })
      .catch(err => {
        console.error("Error fetching experience data: ", err);
        setError('Failed to load experience information');
      });
  }, []);

  return (
    <div className="experience-container">
      <h1>Professional Experience</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : experienceData ? (
        <div className="experience-timeline">
          {experienceData.experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h2>{exp.position}</h2>
                <h3>{exp.company}</h3>
                <p className="duration">{exp.duration}</p>
              </div>
              <div className="experience-projects">
                <h4>Key Projects & Achievements:</h4>
                <ul>
                  {exp.projects.map((project, projectIndex) => (
                    <li key={projectIndex}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading-message">Loading experience...</p>
      )}
    </div>
  );
}

export default Experience;