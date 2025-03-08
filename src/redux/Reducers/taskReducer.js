// src/redux/reducers/taskReducer.js
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, SET_TASK_PRIORITY } from '../types';

const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id ? action.payload : task
        )
      };
    case SET_TASK_PRIORITY:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id 
            ? { ...task, priority: action.payload.priority } 
            : task
        )
      };
    default:
      return state;
  }
};

export default taskReducer;