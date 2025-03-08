// src/redux/selectors.js

/**
 * Redux selectors for accessing state data
 * These provide a clean interface to access data from the Redux store
 */

// Auth selectors
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;

// Task selectors
export const selectAllTasks = (state) => state.tasks.tasks;
export const selectFilteredTasks = (state) => {
  const { tasks, filter } = state.tasks;
  
  if (filter === 'ALL') {
    return tasks;
  } else if (filter === 'HIGH') {
    return tasks.filter(task => task.priority === 'HIGH');
  } else if (filter === 'MEDIUM') {
    return tasks.filter(task => task.priority === 'MEDIUM');
  } else if (filter === 'LOW') {
    return tasks.filter(task => task.priority === 'LOW');
  }
  
  return tasks;
};
export const selectTasksLoading = (state) => state.tasks.loading;
export const selectTaskFilter = (state) => state.tasks.filter;

// Weather selectors
export const selectWeatherData = (state) => state.weather.data;
export const selectWeatherLoading = (state) => state.weather.loading;
export const selectWeatherError = (state) => state.weather.error;