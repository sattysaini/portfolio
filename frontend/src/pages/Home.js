import React, { useState, useEffect } from 'react';
import { getHomeData } from '../services/api';
import './Home.css';

function Home() {
    const [homeData, setHomeData] = useState(null);
    const [error, setError] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        getHomeData()
            .then(response => {
                setHomeData(response.data);
                // Trigger animation after data loads
                setTimeout(() => setIsAnimating(true), 500);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
                setError('Failed to connect to the backend. Is the Spring Boot server running?');
            });
    }, []);

    const AnimatedText = ({ text }) => {
        const [displayText, setDisplayText] = useState('');
        const [currentIndex, setCurrentIndex] = useState(0);
        const [showCursor, setShowCursor] = useState(true);

        useEffect(() => {
            if (isAnimating && currentIndex < text.length) {
                const timer = setTimeout(() => {
                    setDisplayText(prev => prev + text[currentIndex]);
                    setCurrentIndex(prev => prev + 1);
                }, 80 + Math.random() * 120); // Varies speed for realistic typing feel

                return () => clearTimeout(timer);
            } else if (currentIndex >= text.length) {
                // Hide cursor after typing is complete
                setTimeout(() => setShowCursor(false), 1000);
            }
        }, [isAnimating, currentIndex, text]);

        // Reset when text changes
        useEffect(() => {
            setDisplayText('');
            setCurrentIndex(0);
            setShowCursor(true);
        }, [text]);

        return (
            <div className="writing-container">
                <h1 className="writing-text-char">
                    {displayText}
                    {showCursor && <span className="typing-cursor">|</span>}
                </h1>
            </div>
        );
    };

    return (
        <div className="home-container">
            {error ? (
                <p className="error-message">{error}</p>
            ) : homeData ? (
                <>
                    <AnimatedText text={homeData.message} />
                    <p className="description">{homeData.description}</p>
                    <div className="contact-info">
                        <p>📧 {homeData.email}</p>
                        <p>📱 {homeData.phone}</p>
                    </div>
                    <div className="api-message-box">
                        <p>Status: {homeData.status}</p>
                    </div>
                </>
            ) : (
                <p className="loading-message">Loading...</p>
            )}
        </div>
    );
}

export default Home;