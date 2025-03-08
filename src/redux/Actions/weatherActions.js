// src/redux/actions/weatherActions.js
import { 
    FETCH_WEATHER_START, 
    FETCH_WEATHER_SUCCESS, 
    FETCH_WEATHER_FAILURE 
  } from '../types';
  import { getWeatherByLocation } from '../../api/weatherApi';
  
  export const fetchWeather = (location) => async dispatch => {
    dispatch({ type: FETCH_WEATHER_START });
    
    try {
      const weatherData = await getWeatherByLocation(location);
      
      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: weatherData
      });
      
      return weatherData;
    } catch (error) {
      dispatch({
        type: FETCH_WEATHER_FAILURE,
        payload: error.message || 'Failed to fetch weather data'
      });
      
      return Promise.reject(error);
    }
  };