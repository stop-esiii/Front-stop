import React, { useState, useEffect } from 'react';
import Clock from './components/Clock'; // Ou a logo, se substituída
import LoginButton from './components/LoginButton';
import HelpButton from './components/HelpButton';
import SettingsButton from './components/SettingsButton';
import HelpModal from './components/HelpModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SingUpModal'; // Importar o modal de cadastro
import './styles/App.css';

import Home from './MobileComponents/components/home';

const App = () => {
    const [isHelpVisible, setHelpVisible] = useState(false);
    const [isLoginVisible, setLoginVisible] = useState(false);
    const [isSignupVisible, setSignupVisible] = useState(false);

    const useIsMobile = () => {
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
      
        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 720);
          };
      
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
        return isMobile;
    };

    // const useIsTablet = () => {
    //     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
      
    //     useEffect(() => {
    //       const handleResize = () => {
    //         setIsMobile(window.innerWidth <= 768);
    //       };
      
    //       window.addEventListener("resize", handleResize);
    //       return () => window.removeEventListener("resize", handleResize);
    //     }, []);
      
    //     return isMobile;
    // };

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
            Home(showLogin,showHelp,isHelpVisible,isLoginVisible,isSignupVisible,HelpModal,closeHelp,LoginModal,closeLogin,showSignup,SignupModal,closeSignup)
        ); // or return a mobile-specific component or message
    }
    else {
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
    }
};

export default App;
