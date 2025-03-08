// src/api/weatherApi.js
import axios from 'axios';

// Using OpenWeatherMap API for weather data
// Note: In a real application, you would store the API key in an environment variable
const API_KEY = 'your_openweathermap_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Get weather data by location name
export const getWeatherByLocation = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Weather API Error:', error);
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // outside of the range of 2xx
      throw new Error(`Weather API error: ${error.response.data.message}`);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from weather service. Please check your connection.');
    } else {
      // Something happened in setting up the request
      throw new Error(`Error: ${error.message}`);
    }
  }
};

// For development/testing purposes, if no API key is available
export const getMockWeatherData = (location) => {
  return {
    name: location || 'New York',
    main: {
      temp: 22.5,
      feels_like: 23.1,
      humidity: 65
    },
    weather: [
      {
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    wind: {
      speed: 3.6
    }
  };
};

// For development/demo, use mock data if no API key is provided
export const getWeatherByLocationSafe = async (location) => {
  if (API_KEY === 'your_openweathermap_api_key') {
    console.warn('Using mock weather data. Please set a valid API key for real data.');
    return getMockWeatherData(location);
  }
  
  return getWeatherByLocation(location);
};