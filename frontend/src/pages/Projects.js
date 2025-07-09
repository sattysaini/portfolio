import React, { useState, useEffect } from 'react';
import { getProjectsData } from '../services/api';
import './Projects.css';

function Projects() {
  const [projectsData, setProjectsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjectsData()
      .then(response => {
        setProjectsData(response.data);
      })
      .catch(err => {
        console.error("Error fetching projects data: ", err);
        setError('Failed to load projects information');
      });
  }, []);

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : projectsData ? (
        <div className="projects-grid">
          {projectsData.projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <p>{project.achievements}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading-message">Loading projects...</p>
      )}
    </div>
  );
}

export default Projects;