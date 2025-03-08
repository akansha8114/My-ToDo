// src/components/layout/Footer.js
import React from 'react';
import '../../styles/Components/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Task Manager App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;