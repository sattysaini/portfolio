import React, { useState, useEffect } from 'react';
import { getAboutData } from '../services/api';
import './About.css';

function About() {
  const [aboutData, setAboutData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAboutData()
      .then(response => {
        setAboutData(response.data);
      })
      .catch(err => {
        console.error("Error fetching about data: ", err);
        setError('Failed to load about information');
      });
  }, []);

  return (
    <div className="about-container">
      {error ? (
        <p className="error-message">{error}</p>
      ) : aboutData ? (
        <>
          <h1>{aboutData.name}</h1>
          <h2>{aboutData.title}</h2>
          <p>{aboutData.description}</p>
          <div className="skills-section">
            <h3>Skills:</h3>
            <div className="skills-container">
              {aboutData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
}

export default About;