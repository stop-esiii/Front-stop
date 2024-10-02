import React from 'react';
import './stylesComponents/clock.css';
import logo from '../../assets/Logo.png'

const Clock = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Logo do jogo" className="game-logo"></img>
        </div>
    );
};

export default Clock;
