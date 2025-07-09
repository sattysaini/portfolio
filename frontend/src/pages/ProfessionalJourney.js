import React, { useState, useEffect } from 'react';
import { getJourneyData } from '../services/api';
import './ProfessionalJourney.css';

function ProfessionalJourney() {
  const [journeyData, setJourneyData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJourneyData()
      .then(response => {
        setJourneyData(response.data);
      })
      .catch(err => {
        console.error("Error fetching journey data: ", err);
        setError('Failed to load professional journey');
      });
  }, []);

  return (
    <div className="journey-container">
      <h1>Professional Journey</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : journeyData ? (
        <div className="timeline">
          {journeyData.timeline.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.title}</h3>
                  <span className="company">{item.company}</span>
                  <span className="period">{item.period}</span>
                </div>
                <p className="description">{item.description}</p>
                <div className="technologies">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="achievements">
                  {item.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="achievement">✓ {achievement}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading-message">Loading professional journey...</p>
      )}
    </div>
  );
}

export default ProfessionalJourney;