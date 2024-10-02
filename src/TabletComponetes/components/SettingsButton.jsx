import React from 'react';
import Conf from './assets/conf.png'

const SettingsButton = () => {
    return (
        <button className="button">
            <img src={Conf} alt="Configurações" />
        </button>
    );
};

export default SettingsButton;
