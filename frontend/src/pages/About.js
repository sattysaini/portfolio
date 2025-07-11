import React, { useState, useEffect } from 'react';
import { getAboutData } from '../services/api';
import Icon from '../components/Icon';
import Navbar from '../components/Navbar';
import './About.css';

function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const response = await getAboutData();
      setAboutData(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching about data:', err);
      setError('Failed to load about information');
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
        <h2>Unable to load about data</h2>
        <p>{error}</p>
        <button onClick={fetchAboutData}>Retry</button>
      </div>
    );
  }

  return (
    <div className="about-container">

      <main className="main-content">
        <section className="about-hero">
          <h1 className="page-title">{aboutData?.name}</h1>
          <h2 className="page-subtitle">{aboutData?.title}</h2>
          <p className="description">{aboutData?.description}</p>
        </section>

        <section className="education-section">
          <h2 className="section-title">EDUCATION</h2>
          <div className="education-card">
            <p>{aboutData?.education}</p>
          </div>
        </section>

        <section className="skills-section">
          <h2 className="section-title">TECHNICAL SKILLS</h2>
          <div className="skills-grid">
            {aboutData?.skills?.map((skill, index) => (
              <div key={index} className="skill-item">
                <Icon name={skill.toLowerCase().replace(/[^a-z0-9]/g, '')} size={24} />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;