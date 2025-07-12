import { homeData, experienceData } from '../data/portfolioData';

// Function to get the home data
export const getHomeData = () => {
  return Promise.resolve({ data: homeData });
};

// Function to get the about data
export const getAboutData = () => {
  return Promise.resolve({ data: homeData });
};

// Function to get professional journey data
export const getExperienceData = () => {
  return Promise.resolve({ data: experienceData });
};