import React, { useState, useEffect } from 'react';
import { getHomeData } from '../services/api';
import Icon from '../components/Icon';
import './Home.css';

const Home = () => {
    const [homeData, setHomeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHomeData();
    }, []);

    const fetchHomeData = async () => {
        try {
            setLoading(true);
            const response = await getHomeData();
            setHomeData(response.data);
            setError(null);
        } catch (err) {
            console.error('Error fet');
            setError('Failed to load portfolio data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const renderSocialLinks = () => {
        if (!homeData?.socialLinks) return null;

        return homeData.socialLinks.map((link, index) => (
            <a
                key={index}
                href={link.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon name={link.icon} size={20} />
                {link.name}
            </a>
        ));
    };

    const renderTechStack = () => {
        if (!homeData?.techStack) return null;

        return homeData.techStack.map((tech, index) => (
            <div key={index} className="tech-item">
                <Icon name={tech.icon} size={32} />
                <span>{tech.name}</span>
            </div>
        ));
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
                <h2>Unable to load portfolio data</h2>
                <p>{error}</p>
                <button onClick={fetchHomeData}>Retry</button>
            </div>
        );
    }

    if (!homeData) {
        return (
            <div className="error-message">
                <h2>No data available</h2>
                <p>Portfolio data could not be loaded.</p>
                <button onClick={fetchHomeData}>Retry</button>
            </div>
        );
    }

    return (
        <div className="home-container">

            {/* Main Content */}
            <main className="main-content">
                {/* Hero Section */}
                <section className="hero">
                    <div className="profile-section">
                        <div className="profile-image">
                            <img
                                src={homeData.profileImage || '/images/profile.jpg'}
                                alt={`${homeData.fullName || 'Profile'} photo`}
                            />
                        </div>
                        <div className="profile-info">
                            <h1 className="hero-title">
                <span className="greeting-text">
                  {homeData.greeting || "Hey, I'm John."}
                </span>{' '}
                                <span className="highlight">
                  {homeData.role || "I'm a Frontend Developer."}
                </span>
                                {homeData.workStatus && (
                                    <span className="status">
                    <span
                        className={`status-dot ${homeData.workStatus.available ? 'available' : 'unavailable'}`}
                    ></span>
                                        {homeData.workStatus.text || 'Open to work'}
                  </span>
                                )}
                            </h1>
                            <div className="location">
                                📍 {homeData.location || 'Location not specified'}
                            </div>
                            <div className="social-links">
                                {renderSocialLinks()}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="tech-stack">
                    <h2 className="section-title">TECH STACK</h2>
                    <div className="tech-grid">
                        {renderTechStack()}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
