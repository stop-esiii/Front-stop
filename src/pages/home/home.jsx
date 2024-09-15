// src/pages/Home/Home.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import settingsIcon from '../../assets/conf.svg';
import Button from '@mui/material/Button'; // Importa o botão do Material-UI
import IconButton from '@mui/material/IconButton'; // Importa o botão de ícone do Material-UI
import SettingsIcon from '@mui/icons-material/Settings'; // Importa o ícone de configurações

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
          sx={{ marginBottom: '20px' }} // Customiza o estilo do botão
        >
          Login
        </Button>
        <Button variant="contained" color="primary" sx={{ marginBottom: '20px' }}>
          Ajuda
        </Button>
        <IconButton color="primary" aria-label="settings">
          <SettingsIcon style={{ fontSize: 50 }} /> {/* Ajusta o tamanho do ícone */}
        </IconButton>
      </div>
    </div>
  );
}

export default Home;
