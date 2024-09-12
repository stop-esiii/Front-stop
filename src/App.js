import React, {useEffect, useState } from 'react';
import Clock from './components/Clock'; // Ou a logo, se substituída

import HelpModal from './components/HelpModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SingUpModal'; // Importar o modal de cadastro
import './styles/App.css';
import MainButton from './components/MainButton';
import ConfigButton from './components/ConfigButton';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

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

    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <div className="app-container">
                <div className="main-screen">
                    <Clock /> {/* Exibe o logo ou o componente Clock */}
                   
                    <div className="button_div">
                        <MainButton onClick={showLogin} label='LOGIN'/>
                        <MainButton onClick={showHelp} label='AJUDA'/>
                        <ConfigButton></ConfigButton>
                        {/* <HelpButton onClick={showHelp} /> */}
                    </div>
                </div>
    
                {isHelpVisible && <HelpModal closeHelp={closeHelp} />}
                {isLoginVisible && <LoginModal closeLogin={closeLogin} showSignup={showSignup} />} {/* Passa a função de abrir o modal de cadastro */}
                {isSignupVisible && <SignupModal closeSignup={closeSignup} />}
            </div>
        );; // or return a mobile-specific component or message
    }

    return (
        <div className="app-container">
            <div className="main-screen_web">
                <Clock /> {/* Exibe o logo ou o componente Clock */}
               
                <div className="button_div">
                    <MainButton onClick={showLogin} label='LOGIN'/>
                    <MainButton onClick={showHelp} label='AJUDA'/>
                    <ConfigButton></ConfigButton>
                    {/* <HelpButton onClick={showHelp} /> */}
                </div>
            </div>

            {isHelpVisible && <HelpModal closeHelp={closeHelp} />}
            {isLoginVisible && <LoginModal closeLogin={closeLogin} showSignup={showSignup} />} {/* Passa a função de abrir o modal de cadastro */}
            {isSignupVisible && <SignupModal closeSignup={closeSignup} />}
        </div>
    );
};

export default App;