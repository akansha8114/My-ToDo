// src/redux/actions/authActions.js
import { LOGIN_USER, LOGOUT_USER, AUTH_ERROR } from '../types';

// Simulated login (no real backend)
export const loginUser = (credentials) => dispatch => {
  try {
    // Check if credentials match our mock user
    if (credentials.email === 'user@example.com' && credentials.password === 'password123') {
      const user = {
        id: 1,
        name: 'Demo User',
        email: credentials.email
      };
      
      dispatch({
        type: LOGIN_USER,
        payload: user
      });
      
      return Promise.resolve(user);
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Invalid email or password'
      });
      
      return Promise.reject('Invalid email or password');
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.message || 'An error occurred during login'
    });
    
    return Promise.reject(error);
  }
};

export const logoutUser = () => ({
  type: LOGOUT_USER
});