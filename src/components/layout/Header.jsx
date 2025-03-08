// src/components/layout/Header.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/Actions/authActions';
import '../../styles/Components/header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };
  
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Task Manager</Link>
        </div>
        
        <nav className="main-nav">
          {isAuthenticated ? (
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item user-info">
                <span>Welcome, {user.name}</span>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </li>
            </ul>
          ) : (
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;