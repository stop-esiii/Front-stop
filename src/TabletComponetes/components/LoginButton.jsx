import React from 'react';
import Login from './assets/login.png'

const LoginButton = ({ onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            <img src={Login} alt="Login" />
        </button>
    );
};

export default LoginButton;
