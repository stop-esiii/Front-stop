import React from 'react';
import './stylesComponents/forgotPasswordModal.css'; // Certifique-se de que o CSS também esteja importado

const ForgotPasswordModal = ({ closeForgotPassword }) => {
    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeForgotPassword()}>
            <div className="modal-content">
                <button className="close-button" onClick={closeForgotPassword}>X</button>
                <h2>Recuperar Senha</h2>
                <form>
                    <label>
                        E-MAIL:
                        <input type="email" placeholder="Insira seu e-mail aqui." />
                    </label>
                    <button className="submit-button">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
