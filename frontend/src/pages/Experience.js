import React, { useState, useEffect, useRef } from 'react';
import { getExperienceData } from '../services/api';
import TimelineItem from '../components/TimelineItem';
import './Experience.css';

function Experience() {
  const [journeyData, setJourneyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const timelineRef = useRef(null);
  const maxProgressRef = useRef(0);

  useEffect(() => {
    fetchJourneyData();
  }, []);

  useEffect(() => {
    const updateTimelineProgress = () => {
      if (!timelineRef.current) return;
      
      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const timelineStart = rect.top + window.scrollY;
      const timelineHeight = rect.height;
      const currentScroll = window.scrollY + windowHeight * 1;
      
      let progress = (currentScroll - timelineStart) / timelineHeight;
      progress = Math.max(0, Math.min(1, progress));
      
      if (progress > maxProgressRef.current) {
        maxProgressRef.current = progress;
        timeline.style.setProperty('--timeline-progress', progress);
      }
    };

    window.addEventListener('scroll', updateTimelineProgress);
    updateTimelineProgress();
    
    return () => window.removeEventListener('scroll', updateTimelineProgress);
  }, [journeyData]);

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
      <div className="common-loading">
        <div className="common-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="common-error-message">
        <h2>Unable to load journey data</h2>
        <p>{error}</p>
        <button onClick={fetchJourneyData}>Retry</button>
      </div>
    );
  }

  return (
    <section id="experience">
      <main className="common-main-content">
        <h2 className="common-section-title">EXPERIENCE</h2>
        <div className="hero-container">
          <section className="experience-hero">
            <p className="experience-description">I'm a backend-focused Senior Software Engineer with 7+ years of experience crafting scalable systems, intuitive APIs, and cross-platform infrastructure for high-traffic products. From building real-time multiplayer engines to decoupling monolithic architectures, I've led initiatives that balance technical elegance with business impact.
              <br/><br/>Previously at Samsung, and now at Zynga, I've worked across the stack, driving cloud-native backend solutions, optimizing performance at scale, and mentoring teams to build resilient, data-driven platforms.
              <br/><br/>I thrive at the intersection of product, architecture, and performance, where clean code meets real-world scale.</p>
          </section>
        </div>

        <section className="timeline-section">
          <div ref={timelineRef} className="timeline">
            {journeyData?.timeline?.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}

export default Experience;