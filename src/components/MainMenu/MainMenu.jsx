import React from 'react';
import './MainMenu.css'; // Certifique-se de criar um arquivo CSS para estilizar o componente

const MainMenu = ({ userName }) => {
    return (
        <div className="main-menu-container">
            <header className="main-menu-header">
                <h1>OLÁ, <span className="user-name">{userName}</span></h1>
                <div className="menu-icons">
                    <button className="icon-button">❓</button>
                    <button className="icon-button">⚙️</button>
                    <button className="icon-button">↩️</button>
                </div>
            </header>

            <div className="account-info">
                <p>CONTA FREE</p>
                <span className="premium-info">SEJA PREMIUM.</span>
            </div>

            <div className="main-menu-actions">
                <button className="create-game-button">CRIAR PARTIDA</button>
                <button className="join-game-button">ENTRAR EM PARTIDA</button>
            </div>

            <div className="game-info">
                <p>CRIAÇÕES DE PARTIDA RESTANTE:</p>
                <div className="game-indicators">
                    <div className="indicator full"></div>
                    <div className="indicator empty"></div>
                    <div className="indicator empty"></div>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
