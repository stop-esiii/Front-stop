import React, { useState } from 'react';
import './SettingsModal.css';

const SettingsModal = ({ closeSettings }) => {
    const [volume, setVolume] = useState(50); // Estado para o controle de volume
    const [theme, setTheme] = useState('claro'); // Estado para o tema

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    };

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeSettings()}>
            <div className="modal-content">
                <button className="close-button" onClick={closeSettings}>X</button>
                <h2>CONFIGURAÇÕES</h2>

                {/* Controle de Volume */}
                <div className="volume-control">
                    <span role="img" aria-label="volume">🔊</span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                </div>

                {/* Seletor de Tema */}
                <div className="theme-selection">
                    <p>TEMA:</p>
                    <button
                        className={`theme-button ${theme === 'claro' ? 'active' : ''}`}
                        onClick={() => handleThemeChange('claro')}
                    >
                        CLARO
                    </button>
                    <button
                        className={`theme-button ${theme === 'escuro' ? 'active' : ''}`}
                        onClick={() => handleThemeChange('escuro')}
                    >
                        ESCURO
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
