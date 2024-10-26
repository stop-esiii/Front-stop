import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

function DrawLetter() {
  const [letter, setLetter] = useState('');
  const [round, setRound] = useState(1); // Número da rodada

  // Gerar uma letra aleatória
  const generateRandomLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  // Receber o estado da rota, caso queira enviar o número de rodadas da tela anterior
  const location = useLocation();
  const totalRounds = location.state?.totalRounds || 5;

  // Sortear a letra quando o componente é montado
  useEffect(() => {
    const randomLetter = generateRandomLetter();
    setLetter(randomLetter);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffc94d',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#f74440',
          textAlign: 'center',
          marginBottom: 2,
        }}
      >
        RODADA {round} / {totalRounds}
      </Typography>

      <Box
        sx={{
          width: 200,
          height: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          border: '15px solid #f74440',
          clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
        }}
      >
        <Typography sx={{ fontSize: '72px', color: '#f74440', fontWeight: 'bold' }}>
          {letter}
        </Typography>
      </Box>
    </Box>
  );
}

export default DrawLetter;
