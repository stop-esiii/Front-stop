import React from 'react';
import './stylesComponents/LoginModal.css';

const LoginModal = ({ closeLogin, showSignup }) => {
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
                <form>
                    <label>
                        E-MAIL:
                        <input type="email" placeholder="Insira seu e-mail aqui." />
                    </label>
                    <label>
                        SENHA:
                        <input type="password" placeholder="Insira sua senha aqui." />
                    </label>
                    <button className="login-button">ENTRAR</button>
                </form>
                <div className="footer-links">
                    <a href="#forgot-password">Esqueceu sua senha? Clique aqui.</a>
                    <a onClick={showSignup} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Não possui login? Cadastre-se.</a>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
