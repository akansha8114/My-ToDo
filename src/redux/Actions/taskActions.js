// src/redux/actions/taskActions.js
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, SET_TASK_PRIORITY } from '../types';

// Generate unique ID for tasks
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const addTask = (taskData) => {
  const newTask = {
    id: generateId(),
    title: taskData.title,
    description: taskData.description || '',
    priority: taskData.priority || 'Medium',
    completed: false,
    createdAt: new Date().toISOString(),
    dueDate: taskData.dueDate || null,
    weatherRelevant: taskData.weatherRelevant || false
  };
  
  return {
    type: ADD_TASK,
    payload: newTask
  };
};

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task
});

export const setTaskPriority = (taskId, priority) => ({
  type: SET_TASK_PRIORITY,
  payload: { id: taskId, priority }
});