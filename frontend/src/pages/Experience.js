import React, { useState, useEffect } from 'react';
import { getJourneyData } from '../services/api';
import Icon from '../components/Icon';
import './Experience.css';

function Experience() {
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
      setError('Failed to load experience information');
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
        <h2>Unable to load experience data</h2>
        <p>{error}</p>
        <button onClick={fetchJourneyData}>Retry</button>
      </div>
    );
  }

  return (
    <div className="experience-container">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">PORTFOLIO</h1>
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <section className="experience-hero">
          <h1 className="page-title">PROFESSIONAL JOURNEY</h1>
          <p className="page-description">My career progression and key achievements</p>
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

export default Experience;