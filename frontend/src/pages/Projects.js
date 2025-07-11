import React, { useState, useEffect } from 'react';
import { getJourneyData } from '../services/api';
import Icon from '../components/Icon';
import './Projects.css';

function Projects() {
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
      setError('Failed to load projects information');
    } finally {
      setLoading(false);
    }
  };

  // Filter only project type items
  const projects = journeyData?.timeline?.filter(item => item.type === 'project') || [];

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
        <h2>Unable to load projects data</h2>
        <p>{error}</p>
        <button onClick={fetchJourneyData}>Retry</button>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">PORTFOLIO</h1>
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="experience">Experience</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <section className="projects-hero">
          <h1 className="page-title">MY PROJECTS</h1>
          <p className="page-description">Key projects and achievements throughout my career</p>
        </section>

        <section className="projects-section">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <h4>{project.company}</h4>
                  <span className="period">{project.period}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                {project.technologies && (
                  <div className="technologies">
                    <h5>Technologies:</h5>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="tech-tag">
                          <Icon name={tech.toLowerCase().replace(/[^a-z0-9]/g, '')} size={16} />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.achievements && (
                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;