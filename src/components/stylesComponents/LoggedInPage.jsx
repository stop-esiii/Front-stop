import React from 'react';
import './LoggedInPage.css';

const LoggedInPage = () => {
    return (
        <div className="logged-in-container">
            <header className="header">
                <h1>OLÁ <span className="user-name">*NOME*</span></h1>
                <div className="header-icons">
                    <button className="icon-button help-icon">?</button>
                    <button className="icon-button settings-icon">⚙️</button>
                </div>
            </header>

            <div className="profile-section">
                <div className="avatar">
                    <img src="path-to-avatar.png" alt="Avatar" />
                </div>
                <p className="account-level">CONTA FREE <br /><span className="upgrade">Seja Premium...</span></p>
            </div>

            <div className="action-buttons">
                <button className="create-button">CRIAR PARTIDA</button>
                <button className="join-button">ENTRAR EM PARTIDA</button>
            </div>

            <div className="remaining-matches">
                <p>CRIAÇÕES DE PARTIDA RESTANTE:</p>
                <div className="match-indicators">
                    <div className="indicator full"></div>
                    <div className="indicator empty"></div>
                    <div className="indicator empty"></div>
                </div>
            </div>
        </div>
    );
};

export default LoggedInPage;
