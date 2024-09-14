import React from 'react';
import './ForgotPasswordModal.css';

const ForgotPasswordModal = ({ closeForgotPassword }) => {
    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeForgotPassword()}>
            <div className="modal-content">
                <button className="close-button" onClick={closeForgotPassword}>X</button>
                <h2>RECUPERAR SENHA</h2>
                <p>Insira seu e-mail para enviarmos um link de recuperação de sua senha.</p>
                <form>
                    <input type="email" placeholder="Insira seu e-mail aqui." />
                    <button className="send-link-button" type="submit">ENVIAR LINK</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
