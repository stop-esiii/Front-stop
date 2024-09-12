import React from 'react';

const MainButton = ({ color,label,onClick }) => {
    return (
        <button className="main-button" color={color} onClick={onClick}>
            {label}
        </button>
    );
};

export default MainButton;
