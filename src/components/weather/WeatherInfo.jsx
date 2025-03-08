// src/components/weather/WeatherInfo.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/actions/weatherActions';

const WeatherInfo = () => {
  const [location, setLocation] = useState('New York');
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.weather);
  
  useEffect(() => {
    // Load weather data when component mounts
    dispatch(fetchWeather(location));
  }, [dispatch, location]);
  
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  
  const handleFetchWeather = () => {
    dispatch(fetchWeather(location));
  };
  
  // Generate weather icon URL
  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };
  
  return (
    <div className="weather-info">
      <h4>Weather Information</h4>
      
      <div className="weather-search">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
        <button onClick={handleFetchWeather}>Update</button>
      </div>
      
      {loading && <p>Loading weather data...</p>}
      
      {error && <p className="weather-error">Error: {error}</p>}
      
      {!loading && !error && data && (
        <div className="weather-data">
          <div className="weather-main">
            <h5>{data.name}</h5>
            {data.weather && data.weather[0] && (
              <div className="weather-icon">
                <img 
                  src={getWeatherIconUrl(data.weather[0].icon)} 
                  alt={data.weather[0].description} 
                />
                <span>{data.weather[0].main}</span>
              </div>
            )}
          </div>
          
          <div className="weather-details">
            {data.main && (
              <>
                <p>Temperature: {data.main.temp}°C</p>
                <p>Feels like: {data.main.feels_like}°C</p>
                <p>Humidity: {data.main.humidity}%</p>
              </>
            )}
            {data.wind && <p>Wind: {data.wind.speed} m/s</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;