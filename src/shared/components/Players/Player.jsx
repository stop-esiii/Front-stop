import React from 'react';

// Componente para exibir a lista de jogadores
function Players({ players }) {
  return (
    <div>
      {players.map((player, index) => (
        <PlayerBox key={index}>Jogador {index + 1}: {player.name}</PlayerBox>
      ))}
    </div>
  );
}

// Exemplo de um componente PlayerBox básico para exibir cada jogador
const PlayerBox = ({ children }) => (
  <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
    {children}
  </div>
);

export default Players;
