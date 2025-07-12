import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import './TimelineItem.css';

const TimelineItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: '500px' }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={itemRef}
      className={`timeline-item ${item.type} ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="timeline-marker">
        {item.type === 'role' && <img src="/images/top-angle-arrow-outline-icon.svg" alt="Role marker" className="role-icon" />}
      </div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h3>{item.title}</h3>
          <h4>{item.company}</h4>
          <span className="period">{item.period}</span>
        </div>
        {item.type !== 'role' && <p className="timeline-description">{item.description}</p>}
        
        {item.type !== 'role' && item.technologies && (
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
        
        {item.type !== 'role' && item.achievements && (
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
  );
};

export default TimelineItem;