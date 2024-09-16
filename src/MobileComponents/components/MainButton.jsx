import React from 'react';
import  './stylesComponents/Button.css';

const MainButton = ({ color,label,onClick }) => {
    return (
        <button className="mobile-main-button" color={color} onClick={onClick}>
            {label}
        </button>
    );
};

export default MainButton;
