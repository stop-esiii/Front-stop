import React from 'react';
import logo from '../images/Logo.png';

import './stylesComponents/Home.css';
import SvgButton from './ConfigButton.jsx'

const Home = () => {
  return (
    <div className='Home-div'>
      <div className='Logo-div' >
        <img src={logo} alt="logo" />
      </div>
    <div className='Button-Column'>
      {/* <SvgButton svgPath={login_button} onClick=''/>
      <SvgButton svgPath={ajuda_button} onClick=''/>
      <SvgButton svgPath={config_button} onClick=''/> */}
    </div>
    </div>
  );
};

export default Home;