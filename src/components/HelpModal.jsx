import React from 'react';
import './stylesComponents/HelpModal.css'; // Estilos para o modal
import logo from '../images/Logo.png'

const HelpModal = ({closeHelp}) => {
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
                    <strong>Objetivo:</strong>Preencher categorias com palavras que começam com a letra sorteada.
                    <br></br>
                    <br></br>
                    <strong>Como Jogar:</strong>
                    <ul>
                        <li>1. Clique no botão "Jogar" para sortear uma letra.</li>
                        <li>2. Preencha as categorias com palavras que começam com a letra sorteada.</li>
                        <li>3. Clique no botão "Verificar" para conferir as palavras.</li>
                        <li>4. Ganha quem preencher todas as categorias primeiro.</li>
                    </ul>
                    <strong>Pontuação:</strong>
                    <ul>
                        <li>Palavras únicas: 10 pontos</li>
                        <li>Palavras repetidas: 5 pontos</li>
                        <li>Categorias vazias: 0 pontos</li>
                    </ul>
                    <strong>Vence:</strong> Quem tiver mais pontos após a vitoria
                </p>
            </div>
        </div>
    );
};

export default HelpModal;