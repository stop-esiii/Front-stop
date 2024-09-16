import React from 'react';
import './stylesComponents/MainModal.css'; // Estilos para o modal
import logo from '../images/Logo.png'

const MainModal = ({ close,title,content }) => {
    // Função para verificar se o clique foi fora do conteúdo do modal
    const handleOverlayClick = (e) => {
        // Se o clique não foi no conteúdo do modal, fecha o modal
        if (e.target.className === 'modal-overlay') {
            close();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="close-button" onClick={close}>X</button>
                <h2>CONFIGURAÇÕES</h2>
            </div>
        </div>
    );
};

export default MainModal;