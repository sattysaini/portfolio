import React, { useState, useEffect } from 'react';
import { getHomeData } from '../services/api';
import './Home.css';

function Home() {
  const [homeData, setHomeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHomeData()
      .then(response => {
        setHomeData(response.data);
      })
      .catch(err => {
        console.error("Error fetching data: ", err);
        setError('Failed to connect to the backend. Is the Spring Boot server running?');
      });
  }, []);

  return (
    <div className="home-container">
      {error ? (
        <p className="error-message">{error}</p>
      ) : homeData ? (
        <>
          <h1>{homeData.message}</h1>
          <p>{homeData.description}</p>
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