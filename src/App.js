import React, { useState } from 'react';
import Clock from './components/Clock';
import LoginButton from './components/LoginButton';
import HelpButton from './components/HelpButton';
import SettingsButton from './components/SettingsButton';
import HelpModal from './components/HelpModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SingUpModal';
import ForgotPasswordModal from './components/stylesComponents/ForgotPassworldModal';
import ErrorModal from './components/Modals/ErrorModal';
import SettingsModal from './components/stylesComponents/SettingsModal';
import MainMenu from './components/MainMenu/MainMenu';
import './styles/App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticação
    const [userName, setUserName] = useState(''); // Estado para o nome do usuário
    const [isHelpVisible, setHelpVisible] = useState(false);
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isSignupVisible, setSignupVisible] = useState(false);
    const [isForgotPasswordVisible, setForgotPasswordVisible] = useState(false);
    const [isSettingsVisible, setSettingsVisible] = useState(false);
    const [isErrorVisible, setErrorVisible] = useState(false);

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

    const showError = () => setErrorVisible(true);
    const closeError = () => setErrorVisible(false);

    // Função de login simulada
    const handleLogin = (email, password) => {
        // Simulação de uma verificação com o banco de dados
        const isUserRegistered = true; // Troque por uma lógica real de verificação

        if (isUserRegistered) {
            setUserName(email.split('@')[0]); // Extrai o nome de usuário do email
            setIsLoggedIn(true); // Marca o usuário como logado
            closeLogin(); // Fecha o modal de login
        } else {
            showError(); // Mostra o modal de erro se o usuário não estiver cadastrado
        }
    };

    return (
        <div className="app-container">
            {!isLoggedIn ? (
                <div className="main-screen">
                    <Clock />
                    <LoginButton onClick={showLogin} />
                    <div className="buttons">
                        <HelpButton onClick={showHelp} />
                    </div>
                    <SettingsButton onClick={showSettings} />
                </div>
            ) : (
                <MainMenu userName={userName} /> // Renderiza a tela principal com o nome do usuário
            )}

            {isHelpVisible && <HelpModal closeHelp={closeHelp} />}
            {isLoginVisible && (
                <LoginModal
                    closeLogin={closeLogin}
                    showSignup={showSignup}
                    showForgotPassword={showForgotPassword}
                    handleLogin={handleLogin} // Passa a função de login para o modal
                />
            )}
            {isSignupVisible && <SignupModal closeSignup={closeSignup} />}
            {isForgotPasswordVisible && <ForgotPasswordModal closeForgotPassword={closeForgotPassword} />}
            {isSettingsVisible && <SettingsModal closeSettings={closeSettings} />}
            {isErrorVisible && <ErrorModal closeError={closeError} />}
        </div>
    );
};

export default App;
