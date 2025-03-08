// src/pages/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import TaskInput from '../components/tasks/TaskInput';
import TaskList from '../components/tasks/TaskList';
import '../styles/pages/dashboard.css';

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);
  const { tasks } = useSelector(state => state.tasks);
  
  // Calculate task statistics
  const getTaskStats = () => {
    const completed = tasks.filter(task => task.completed).length;
    const highPriority = tasks.filter(task => task.priority === 'High').length;
    const pendingTasks = tasks.filter(task => !task.completed).length;
    
    return {
      total: tasks.length,
      completed,
      highPriority,
      pendingTasks,
      completionRate: tasks.length > 0 ? (completed / tasks.length * 100).toFixed(0) : 0
    };
  };
  
  const stats = getTaskStats();
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Hello, {user.name}</h1>
        <p>Here's an overview of your tasks</p>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p className="stat-value">{stats.total}</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p className="stat-value">{stats.completed}</p>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <p className="stat-value">{stats.pendingTasks}</p>
        </div>
        <div className="stat-card">
          <h3>High Priority</h3>
          <p className="stat-value">{stats.highPriority}</p>
        </div>
        <div className="stat-card">
          <h3>Completion Rate</h3>
          <p className="stat-value">{stats.completionRate}%</p>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="task-section">
          <TaskInput />
        </div>
        <div className="task-section">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;