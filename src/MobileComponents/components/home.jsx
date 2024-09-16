import React from 'react';
import ClockGIF from '../../components/Clock_gif';
import MainButton from './MainButton';
import ConfigButton from './ConfigButton';
import './stylesComponents/Home.css'
const Home = (
    showLogin,
    showHelp,
    isHelpVisible,
    isLoginVisible,
    isSignupVisible,
    HelpModal,
    closeHelp,
    LoginModal,
    closeLogin,
    showSignup,
    SignupModal,
    closeSignup,
    showModal
  ) => {
  return (
    <div className="mobile-app-container">
    <div className="mobile-main-screen">
        <ClockGIF/> {/* Exibe o logo ou o componente Clock */}
        <div className="mobile-button-div">
            <MainButton onClick={showLogin} label='LOGIN'/>
            <MainButton onClick={showHelp} label='AJUDA'/>
            <ConfigButton onClick={showModal}></ConfigButton>
            {/* <HelpButton onClick={showHelp} /> */}
        </div>
    </div>
      {isHelpVisible && <HelpModal closeHelp={closeHelp} />}
      {isLoginVisible && <LoginModal closeLogin={closeLogin} showSignup={showSignup} />} {/* Passa a função de abrir o modal de cadastro */}
      {isSignupVisible && <SignupModal closeSignup={closeSignup} />}
    </div>
  );
};

export default Home;