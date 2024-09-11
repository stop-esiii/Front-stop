import React, { useState, useEffect } from 'react';
import './stylesComponents/LoginModal.css';

import { useNavigate } from 'react-router-dom';
import { login } from '../Service/Service';
import useLocalStorage from "../hooks/useLocalStorage";

const LoginModal = ({ closeLogin, showSignup }) => {
    const navigate = useNavigate();
    const [token, setToken] = useLocalStorage('access_token', '');
    const [userLogin, setUserLogin] = useState({
        login: '',
        password: ''

    });

    function updatedModel(e) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if (token !== '') {
            navigate('/home');
        }
    }, [token, navigate]);

    async function onSubmit(e) {
        e.preventDefault();
        try {
            await login('/auth', userLogin, setToken);
            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }


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
                        <input
                            name="login"
                            value={userLogin.login}
                            onChange={(e) => updatedModel(e)}
                            type="text"
                            placeholder="Insira seu e-mail aqui."
                        />
                    </label>
                    <label>
                        SENHA:
                        <input
                            name="password"
                            value={userLogin.password}
                            onChange={(e) => updatedModel(e)}
                            type="password"
                            placeholder="Insira sua senha aqui."
                        />
                    </label>
                    <button className="login-button" onClick={onSubmit}>ENTRAR</button>
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
