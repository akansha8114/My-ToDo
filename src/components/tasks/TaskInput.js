// src/components/tasks/TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions/taskActions';
import '../../styles/components/tasks.css';

const TaskInput = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
    weatherRelevant: false
  });
  
  const [errors, setErrors] = useState({});
  
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error on change
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!task.title.trim()) {
      newErrors.title = 'Task title is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(addTask(task));
      // Reset form after submission
      setTask({
        title: '',
        description: '',
        priority: 'Medium',
        dueDate: '',
        weatherRelevant: false
      });
    }
  };
  
  return (
    <div className="task-input-container">
      <h2>Add New Task</h2>
      
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className={errors.title ? 'input-error' : ''}
          />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Enter task description"
            rows="3"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="weatherRelevant"
            name="weatherRelevant"
            checked={task.weatherRelevant}
            onChange={handleChange}
          />
          <label htmlFor="weatherRelevant">Weather relevant task</label>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="add-task-button">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskInput;