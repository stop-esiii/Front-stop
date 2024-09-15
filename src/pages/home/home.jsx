// src/pages/Home/Home.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import settingsIcon from '../../assets/conf.svg';
import Button from '@mui/material/Button'; 
import IconButton from '@mui/material/IconButton'; 
import SettingsIcon from '@mui/icons-material/Settings'; 

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="logo">
        <img src={logo} alt="Stop Logo" className="logo-image" />
      </div>
      <div className="menu">
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/login')} 
          sx={{ marginBottom: '20px' }} 
        >
          Login
        </Button>
        <Button variant="contained" color="primary" sx={{ marginBottom: '20px' }}>
          Ajuda
        </Button>
        <IconButton color="primary" aria-label="settings">
          <SettingsIcon style={{ fontSize: 50 }} /> 
        </IconButton>
      </div>
    </div>
  );
}

export default Home;
