// src/components/tasks/TaskList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import '../../styles/Components/tasks.css';

const TaskList = () => {
  const { tasks } = useSelector(state => state.tasks);
  const [filter, setFilter] = useState('all');
  
  // Filter tasks based on selected filter
  const getFilteredTasks = () => {
    switch (filter) {
      case 'high':
        return tasks.filter(task => task.priority === 'High');
      case 'medium':
        return tasks.filter(task => task.priority === 'Medium');
      case 'low':
        return tasks.filter(task => task.priority === 'Low');
      case 'weather':
        return tasks.filter(task => task.weatherRelevant);
      default:
        return tasks;
    }
  };
  
  const filteredTasks = getFilteredTasks();
  
  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <h2>Your Tasks</h2>
        <div className="task-filters">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Tasks</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
            <option value="weather">Weather Relevant</option>
          </select>
        </div>
      </div>
      
      {filteredTasks.length === 0 ? (
        <div className="no-tasks-message">
          <p>No tasks found. Add a new task to get started!</p>
        </div>
      ) : (
        <div className="tasks-grid">
          {filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;