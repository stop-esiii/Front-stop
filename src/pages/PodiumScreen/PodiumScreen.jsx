// src/pages/PodiumScreen/PodiumScreen.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PodiumScreen() {
  const navigate = useNavigate();

  // Simulando dados dos vencedores
  const players = [
    { name: 'Jogador 1', points: 100, position: 1 },
    { name: 'Jogador 2', points: 100, position: 1 },
    { name: 'Jogador 3', points: 100, position: 1 },
  ];

  const handlePlayAgain = () => {
    navigate('/game-options'); // Ajuste a rota conforme necessário
  };

  const handleExit = () => {
    navigate('/'); // Redireciona para a tela inicial ou para onde preferir
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#001b33',
        backgroundImage: 'url(/assets/city-background.png)',
        backgroundSize: 'cover',
        flexDirection: 'column',
      }}
    >
      {/* Título Pódio */}
      <Typography sx={{ fontWeight: 'bold', fontSize: '24px', color: '#fff', marginBottom: 3 }}>
        PÓDIO
      </Typography>

      {/* Container do pódio */}
      <Box
        sx={{
          width: 450,
          padding: 3,
          borderRadius: 2,
          backgroundColor: '#0d1b2a',
          border: '5px solid #ff6f61',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 3,
          textAlign: 'center',
        }}
      >
        {players.map((player, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#ff6f61' }}>
              {player.position}º LUGAR
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: '#ff6f61',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 1,
                marginBottom: 1,
              }}
            />
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', color: '#fff' }}>
              {player.name}
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', color: '#fff' }}>
              {player.points} PONTOS
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Botões para jogar novamente e sair */}
      <Box sx={{ display: 'flex', gap: 5, marginTop: 3 }}>
        <Button
          variant="contained"
          onClick={handlePlayAgain}
          sx={{
            backgroundColor: '#ff6f61',
            color: '#fff',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
        >
          JOGAR NOVAMENTE
        </Button>
        <Button
          variant="contained"
          onClick={handleExit}
          sx={{
            backgroundColor: '#ff6f61',
            color: '#fff',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
        >
          SAIR
        </Button>
      </Box>
    </Box>
  );
}

export default PodiumScreen;
