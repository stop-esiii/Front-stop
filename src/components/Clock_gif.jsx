import React from 'react';
import './stylesComponents/clock_gif.css';
import logo from '../images/logo_gif.gif'

const ClockGIF = () => {
    return (
        <div className="gif-container">
            <img src={logo} alt="Logo do jogo" className="gif"></img>
        </div>
    );
};

export default ClockGIF;
