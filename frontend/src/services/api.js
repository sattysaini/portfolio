import axios from 'axios';

// Create an axios instance configured to talk to the Spring Boot backend
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Your Spring Boot API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get the home data from the backend
export const getHomeData = () => {
  return apiClient.get('/home');
};

// Function to get the about data from the backend
export const getAboutData = () => {
  return apiClient.get('/about');
};

// Function to get professional journey data from the backend
export const getExperienceData = () => {
  return apiClient.get('/experience');
};