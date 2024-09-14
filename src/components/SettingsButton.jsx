import React from 'react';
import confImage from '../images/conf.svg';
const SettingsButton = ({ onClick }) => {
    return (
        <button className="settings-button" onClick={onClick}>
            <img src={confImage} alt="Configurações" />
        </button>
    );
};

export default SettingsButton;
