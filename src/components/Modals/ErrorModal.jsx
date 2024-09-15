import React from 'react';
import './ErroModal.css'; // Crie este arquivo para estilizar o modal

const ErrorModal = ({ closeError }) => {
    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeError()}>
            <div className="modal-content">
                <button className="close-button" onClick={closeError}>X</button>
                <p className="error-message">SENHA E/OU LOGIN<br />NÃO CADASTRADO(S)!</p>
            </div>
        </div>
    );
};

export default ErrorModal;
