// src/redux/middleware.js

/**
 * Custom middleware for Redux
 * This includes logging middleware and local storage persistence
 */

import { saveToLocalStorage } from '../utils/localStorage';

// Middleware to log actions and state changes
export const loggerMiddleware = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

// Middleware to save specific parts of state to localStorage
export const localStorageMiddleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  
  // Save auth state when it changes
  if (
    action.type.startsWith('auth/') ||
    action.type === 'LOGOUT'
  ) {
    saveToLocalStorage('authState', state.auth);
  }
  
  // Save tasks when they change
  if (action.type.startsWith('tasks/')) {
    saveToLocalStorage('tasksState', state.tasks);
  }
  
  return result;
};