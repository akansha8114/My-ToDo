// src/utils/dateFormat.js

/**
 * Utility functions for formatting dates
 */

// Format date to readable string (e.g., "Mon, 08 Mar 2025")
export const formatDate = (date) => {
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  
  // Get time from date (e.g., "14:30")
  export const formatTime = (date) => {
    const options = { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    };
    return new Date(date).toLocaleTimeString('en-US', options);
  };
  
  // Check if a date is today
  export const isToday = (date) => {
    const today = new Date();
    const compareDate = new Date(date);
    
    return (
      compareDate.getDate() === today.getDate() &&
      compareDate.getMonth() === today.getMonth() &&
      compareDate.getFullYear() === today.getFullYear()
    );
  };