// src/redux/reducers/weatherReducer.js
import { 
    FETCH_WEATHER_START, 
    FETCH_WEATHER_SUCCESS, 
    FETCH_WEATHER_FAILURE 
  } from '../types';
  
  const initialState = {
    loading: false,
    data: null,
    error: null
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_START:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_WEATHER_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null
        };
      case FETCH_WEATHER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default weatherReducer;