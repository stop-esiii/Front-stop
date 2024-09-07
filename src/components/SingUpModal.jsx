import React from 'react';
import './stylesComponents/SingUpModal.css';

const SignupModal = ({ closeSignup }) => {
    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeSignup()}>
            <div className="modal-content">
                <button className="close-button" onClick={closeSignup}>X</button>
                <h2>CADASTRO</h2>
                <button className="google-login-button">
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
                    CONTINUAR COM GOOGLE
                </button>
                <div className="separator">OU</div>
                <form>
                    <label>
                        NOME:
                        <input type="text" placeholder="Insira seu nome aqui." />
                    </label>
                    <label>
                        E-MAIL:
                        <input type="email" placeholder="Insira seu e-mail aqui." />
                    </label>
                    <label>
                        SENHA:
                        <input type="password" placeholder="Insira sua senha aqui." />
                    </label>
                    <label>
                        CONFIRMAR SENHA:
                        <input type="password" placeholder="Insira sua senha novamente aqui." />
                    </label>
                    <button className="signup-button">CADASTRAR</button>
                </form>
            </div>
        </div>
    );
};

export default SignupModal;
