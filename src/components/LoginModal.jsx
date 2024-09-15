import React, { useState } from 'react';
import './stylesComponents/LoginModal.css';

const LoginModal = ({ closeLogin, showSignup, showForgotPassword, handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeLogin()}>
            <div className="modal-content">
                <button className="close-button" onClick={closeLogin}>X</button>
                <h2>LOGIN</h2>
                <button className="google-login-button">
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
                    FAZER LOGIN COM GOOGLE
                </button>
                <div className="separator">OU</div>
                <form onSubmit={handleSubmit}>
                    <label>
                        E-MAIL:
                        <input
                            type="email"
                            placeholder="Insira seu e-mail aqui."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        SENHA:
                        <input
                            type="password"
                            placeholder="Insira sua senha aqui."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button className="login-button" type="submit">ENTRAR</button>
                </form>
                <div className="footer-links">
                    <a onClick={showForgotPassword} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Esqueceu sua senha? Clique aqui.</a>
                    <a onClick={showSignup} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Não possui login? Cadastre-se.</a>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
