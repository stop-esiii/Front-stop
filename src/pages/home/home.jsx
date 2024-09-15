// src/pages/Home/Home.js
import React from 'react';
import '../home/home.css';
import logo from '../../assets/Logo.png'; // Importa a imagem da logo
import settingsIcon from '../../assets/conf.svg'; // Importa o ícone de configurações

function Home() {
  return (
    <div className="home-container">
      <div className="logo">
        <img src={logo} alt="Stop Logo" className="logo-image" /> {/* Usa a imagem da logo */}
      </div>
      <div className="menu">
        <button className="menu-button">Login</button>
        <button className="menu-button">Ajuda</button>
        <img src={settingsIcon} alt="Settings" className="settings-icon" /> {/* Usa a imagem do ícone de configurações */}
      </div>
    </div>
  );
}

export default Home;
