// src/utils/validation.js

/**
 * Utility functions for form validation
 * These functions provide validation for various form inputs
 */

// Validate email format
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validate password requirements (at least 6 characters)
  export const isValidPassword = (password) => {
    return password && password.length >= 6;
  };
  
  // Validate task input (non-empty)
  export const isValidTask = (task) => {
    return task && task.trim().length > 0;
  };
  
  // Format error messages for display
  export const formatValidationError = (field, message) => {
    return {
      field,
      message
    };
  };