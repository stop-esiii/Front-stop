import React from 'react';
import Help from './assets/ajuda.png';

const HelpButton = ({ onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            <img src={Help} alt="Ajuda"/>
        </button>
    );
};

export default HelpButton;
