

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LetterSlotMachine from './slotmachine.jsx';

function DrawLetter() {
  
  const [letter, setLetter] = useState('');
  const [round, setRound] = useState(1); // Número da rodada
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(true);

  // Gerar uma letra aleatória
  const generateRandomLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  // Sortear a letra quando o componente é montado
  useEffect(() => {
    const randomLetter = generateRandomLetter();
    setLetter(randomLetter);
  }, []);

  const handleAnimationComplete = () => {
    setIsSpinning(false);
  };

  const handleStartGame = () => {
    // Navegar para a tela do jogo (GameScreen) passando a letra sorteada como estado
    navigate('/game-screen', { state: { letter } });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:10,
        height: '100vh',
        width:'100vw',
        backgroundColor: 'rgba(6, 47, 94, 0.6)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Placa de rodada */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          width: '300px',
          borderRadius:30,
          backgroundColor:'var(--third-color)',
          height:'11vh'
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          top: '7%',
          fontWeight: 'bolder',
          fontSize: '38px',
          color: '#fff',
        }}
      >
        RODADA {round} / 5
      </Typography>

      {/* Status dos jogadores */}
      <Typography
        sx={{
          position: 'absolute',
          top: '20%',
          color: '#fff',
          fontSize: '16px',
        }}
      >
        {/* Jogadores conectados: {players.size}/2 */}
      </Typography>

      {/* Slot Machine de Letras */}
      <LetterSlotMachine 
        finalLetter={letter}
        onAnimationComplete={handleAnimationComplete}
        gameLetters={"ABCDE"}
      />

      {/* BotÃ£o condicional */}
      {/* {!isReady ? (
        <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CircularProgress sx={{ color: '#f74440' }} />
          <Typography sx={{ color: '#fff', marginTop: 1 }}>
            Aguardando outro jogador...
          </Typography>
        </Box>
      ) : (
        isHost && !isSpinning && (
          <Button
            variant="contained"
            onClick={handleStartGame}
            sx={{
              marginTop: 3,
              padding: '10px 20px',
              backgroundColor: '#f74440',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#d32f2f',
              },
            }}
          >
            INICIAR JOGO
          </Button>
        )
      )} */}
    </Box>
  );
}

export default DrawLetter;