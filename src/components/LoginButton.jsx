import React from 'react';

const LoginButton = ({ onClick }) => {
    return (
        <button className="login-button" onClick={onClick}>
            LOGIN
        </button>
    );
};

export default LoginButton;
