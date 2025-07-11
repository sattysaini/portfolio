import React, { useState, useEffect } from 'react';
import { getExperienceData } from '../services/api';
import TimelineItem from '../components/TimelineItem';
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
      const response = await getExperienceData();
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
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Experience;