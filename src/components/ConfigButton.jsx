// src/components/SvgButton.js
import React from 'react';
import config_svg from '../images/config_button.svg'
const ConfigButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="config-button">
         <img src={config_svg} alt='button'/>
    </button>
  );
};

export default ConfigButton;
// 