import React, { useState, useEffect } from 'react';
import { getHomeMessage } from '../services/api';
import './Home.css';

function Home() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the message from the Spring Boot API when the component mounts
    getHomeMessage()
      .then(response => {
        setMessage(response.data);
      })
      .catch(err => {
        console.error("Error fetching data: ", err);
        setError('Failed to connect to the backend. Is the Spring Boot server running?');
        setMessage('');
      });
  }, []); // The empty array ensures this effect runs only once

  return (
    <div className="home-container text-center p-10 bg-gray-800 rounded-lg shadow-xl">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl text-gray-300 mb-6">
        This is a full-stack application built with React and Spring Boot.
      </p>
      <div className="api-message-box bg-gray-900 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Message from Backend:</h2>
        {error ? (
          <p className="text-red-500 font-bold">{error}</p>
        ) : (
          <p className="text-lg text-gray-200 font-mono">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Home;