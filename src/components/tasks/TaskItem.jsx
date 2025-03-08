// src/components/tasks/TaskItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask, setTaskPriority } from '../../redux/actions/taskActions';
import WeatherInfo from '../weather/WeatherInfo';
import '../../styles/components/tasks.css';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task.id));
    }
  };
  
  const handleToggleComplete = () => {
    dispatch(updateTask({
      ...task,
      completed: !task.completed
    }));
  };
  
  const handlePriorityChange = (e) => {
    dispatch(setTaskPriority(task.id, e.target.value));
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    
   // src/components/tasks/TaskItem.js (continued)
   const options = { year: 'numeric', month: 'short', day: 'numeric' };
   return new Date(dateString).toLocaleDateString(undefined, options);
 };
 
 // Get priority class for styling
 const getPriorityClass = () => {
   switch (task.priority) {
     case 'High':
       return 'priority-high';
     case 'Medium':
       return 'priority-medium';
     case 'Low':
       return 'priority-low';
     default:
       return '';
   }
 };
 
 return (
   <div className={`task-item ${task.completed ? 'task-completed' : ''} ${getPriorityClass()}`}>
     <div className="task-header">
       <h3 className="task-title">{task.title}</h3>
       <div className="task-priority">
         <select 
           value={task.priority} 
           onChange={handlePriorityChange}
           className="priority-select"
         >
           <option value="Low">Low</option>
           <option value="Medium">Medium</option>
           <option value="High">High</option>
         </select>
       </div>
     </div>
     
     {task.description && (
       <p className="task-description">{task.description}</p>
     )}
     
     <div className="task-meta">
       <p className="task-date">Due: {formatDate(task.dueDate)}</p>
       <p className="task-created">Created: {formatDate(task.createdAt)}</p>
     </div>
     
     {task.weatherRelevant && <WeatherInfo />}
     
     <div className="task-actions">
       <button 
         onClick={handleToggleComplete} 
         className={`toggle-btn ${task.completed ? 'completed' : ''}`}
       >
         {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
       </button>
       <button onClick={handleDelete} className="delete-btn">Delete</button>
     </div>
   </div>
 );
};

export default TaskItem;