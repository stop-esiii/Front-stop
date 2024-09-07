import React from 'react';
import './stylesComponents/HelpModal.css'; // Estilos para o modal
import logo from '../images/Logo.png'
const HelpModal = ({ closeHelp }) => {
    // Função para verificar se o clique foi fora do conteúdo do modal
    const handleOverlayClick = (e) => {
        // Se o clique não foi no conteúdo do modal, fecha o modal
        if (e.target.className === 'modal-overlay') {
            closeHelp();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="close-button" onClick={closeHelp}>X</button>
                <h2>COMO JOGAR?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at fermentum dui. Ut pretium elit ac enim tempus dictum eu euismod metus.
                    <br /><br />
                    Nunc non donec sapien in congue convallis nisl, non tempus felis bibendum. Sed feugiat odio a ex vulputate pharetra...
                </p>
            </div>
        </div>
    );
};

export default HelpModal;