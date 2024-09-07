import React, { useState } from 'react';
import Clock from './components/Clock'; // Ou a logo, se substituída
import LoginButton from './components/LoginButton';
import HelpButton from './components/HelpButton';
import SettingsButton from './components/SettingsButton';
import HelpModal from './components/HelpModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SingUpModal'; // Importar o modal de cadastro
import './styles/App.css';

const App = () => {
    const [isHelpVisible, setHelpVisible] = useState(false);
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isSignupVisible, setSignupVisible] = useState(false);

    const showHelp = () => {
        setHelpVisible(true);
    };

    const closeHelp = () => {
        setHelpVisible(false);
    };

    const showLogin = () => {
        setLoginVisible(true);
    };

    const closeLogin = () => {
        setLoginVisible(false);
    };

    const showSignup = () => {
        setSignupVisible(true);
        setLoginVisible(false); // Fecha o modal de login ao abrir o de cadastro
    };

    const closeSignup = () => {
        setSignupVisible(false);
    };

    return (
        <div className="app-container">
            <div className="main-screen">
                <Clock /> {/* Exibe o logo ou o componente Clock */}
                <LoginButton onClick={showLogin} />
                <div className="buttons">
                    <HelpButton onClick={showHelp} />
                </div>
                <SettingsButton />
            </div>

            {isHelpVisible && <HelpModal closeHelp={closeHelp} />}
            {isLoginVisible && <LoginModal closeLogin={closeLogin} showSignup={showSignup} />} {/* Passa a função de abrir o modal de cadastro */}
            {isSignupVisible && <SignupModal closeSignup={closeSignup} />}
        </div>
    );
};

export default App;
