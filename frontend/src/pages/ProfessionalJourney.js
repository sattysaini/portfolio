import React, { useState, useEffect } from 'react';
import { getJourneyData } from '../services/api';
import Icon from '../components/Icon';
import Navbar from '../components/Navbar';
import './ProfessionalJourney.css';

function ProfessionalJourney() {
  const [journeyData, setJourneyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJourneyData();
  }, []);

  const fetchJourneyData = async () => {
    try {
      setLoading(true);
      const response = await getJourneyData();
      setJourneyData(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching journey data:', err);
      setError('Failed to load professional journey');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>Unable to load journey data</h2>
        <p>{error}</p>
        <button onClick={fetchJourneyData}>Retry</button>
      </div>
    );
  }

  return (
    <div className="journey-container">

      <main className="main-content">
        <section className="journey-hero">
          <h1 className="page-title">PROFESSIONAL JOURNEY</h1>
          <p className="page-description">Complete timeline of my career progression and achievements</p>
        </section>

        <section className="timeline-section">
          <div className="timeline">
            {journeyData?.timeline?.map((item, index) => (
              <div key={index} className={`timeline-item ${item.type}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <h4>{item.company}</h4>
                    <span className="period">{item.period}</span>
                  </div>
                  <p className="timeline-description">{item.description}</p>
                  
                  {item.technologies && (
                    <div className="technologies">
                      <h5>Technologies:</h5>
                      <div className="tech-tags">
                        {item.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="tech-tag">
                            <Icon name={tech.toLowerCase().replace(/[^a-z0-9]/g, '')} size={16} />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {item.achievements && (
                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfessionalJourney;