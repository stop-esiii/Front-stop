import React, { useState } from 'react';
import './JoinGameModal.css'; // Certifique-se de criar um arquivo CSS para estilizar este componente

const JoinGameModal = ({ closeJoinGame }) => {
    const [gameCode, setGameCode] = useState('');

    const handleJoinGame = (e) => {
        e.preventDefault();
        // Adicione a lógica para verificar e entrar na partida usando o código
        console.log('Código da partida:', gameCode);
        closeJoinGame(); // Fecha o modal após a tentativa de entrada
    };

    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeJoinGame()}>
            <div className="modal-content">
                <button className="close-button" onClick={closeJoinGame}>X</button>
                <h2>ENTRAR EM PARTIDA</h2>
                <p>Insira o código de partida abaixo para poder entrar.</p>
                <form onSubmit={handleJoinGame}>
                    <input
                        type="text"
                        placeholder="Insira o código aqui."
                        value={gameCode}
                        onChange={(e) => setGameCode(e.target.value)}
                        required
                    />
                    <button className="join-game-button" type="submit">ENTRAR</button>
                </form>
            </div>
        </div>
    );
};

export default JoinGameModal;
