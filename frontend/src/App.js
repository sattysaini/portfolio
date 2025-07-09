import axios from 'axios';

// Create an axios instance configured to talk to the Spring Boot backend
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Your Spring Boot API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get the home message from the backend
export const getHomeMessage = () => {
  return apiClient.get('/home');
};