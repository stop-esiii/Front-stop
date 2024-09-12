import React from 'react';
import './stylesComponents/clock.css';
import logo from '../images/logo_gif.gif'

const Clock = () => {
    return (
        <div className="gif-container">
            <img src={logo} alt="Logo do jogo" className="gif"></img>
        </div>
    );
};

export default Clock;
