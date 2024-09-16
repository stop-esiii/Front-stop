import React from 'react';
import './stylesComponents/clock.css';
import logo from '../images/Logo.png'

const Clock = () => {
    return (
        <div className="clock-container">
            <img src={logo} alt="Logo do jogo" className="game-logo"></img>
        </div>
    );
};

export default Clock;
