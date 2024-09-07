import React, { useState, useEffect } from 'react';
import './stylesComponents/LoginModal.css';

import { useNavigate } from 'react-router-dom';
import { login } from '../Service/Service';
import useLocalStorage from "../hooks/useLocalStorage";

const LoginModal = ({ closeLogin, showSignup }) => {
    const navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token', ''); // Use um valor padrão vazio para o token
    const [userLogin, setUserLogin] = useState({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
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
