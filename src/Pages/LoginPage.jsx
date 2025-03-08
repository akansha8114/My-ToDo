// src/pages/LoginPage.js
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import '../styles/pages/login.css';

const LoginPage = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const navigate = useNavigate();
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div className="login-page">
      <div className="login-content">
        <div className="login-info">
          <h1>Welcome to Task Manager</h1>
          <p>Your personal task management solution.</p>
          <p>Login to access your tasks, track your productivity, and stay organized.</p>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;