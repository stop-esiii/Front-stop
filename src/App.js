import React, { useState } from 'react';
import Clock from './components/Clock';
import LoginButton from './components/LoginButton';
import HelpButton from './components/HelpButton';
import SettingsButton from './components/SettingsButton';
import HelpModal from './components/HelpModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SingUpModal';
import ForgotPasswordModal from './components/stylesComponents/ForgotPassworldModal';
import SettingsModal from './components/stylesComponents/SettingsModal';
import './styles/App.css';

const App = () => {
    const [isHelpVisible, setHelpVisible] = useState(false);
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isSignupVisible, setSignupVisible] = useState(false);
    const [isForgotPasswordVisible, setForgotPasswordVisible] = useState(false); // Estado para o modal de recuperação de senha
    const [isSettingsVisible, setSettingsVisible] = useState(false);

    // Funções para exibir/fechar modais
    const showHelp = () => setHelpVisible(true);
    const closeHelp = () => setHelpVisible(false);

    const showLogin = () => setLoginVisible(true);
    const closeLogin = () => setLoginVisible(false);

    const showSignup = () => {
        setSignupVisible(true);
        setLoginVisible(false);
    };
    const closeSignup = () => setSignupVisible(false);

    const showForgotPassword = () => {
        setForgotPasswordVisible(true);
        setLoginVisible(false);
    };
    const closeForgotPassword = () => setForgotPasswordVisible(false);

    const showSettings = () => setSettingsVisible(true);
    const closeSettings = () => setSettingsVisible(false);

    return (
        <div className="app-container">
            <div className="main-screen">
                <Clock />
                <LoginButton onClick={showLogin} />
                <div className="buttons">
                    <HelpButton onClick={showHelp} />
                </div>
                <SettingsButton onClick={showSettings} />
            </div>

            {isHelpVisible && <HelpModal closeHelp={closeHelp} />}
            {isLoginVisible && (
                <LoginModal
                    closeLogin={closeLogin}
                    showSignup={showSignup}
                    showForgotPassword={showForgotPassword} // Passa a função para abrir o modal de recuperação de senha
                />
            )}
            {isSignupVisible && <SignupModal closeSignup={closeSignup} />}
            {isForgotPasswordVisible && <ForgotPasswordModal closeForgotPassword={closeForgotPassword} />}
            {isSettingsVisible && <SettingsModal closeSettings={closeSettings} />}
        </div>
    );
};

export default App;
