// src/pages/DrawLetter/DrawLetter.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DrawLetter() {
  const [letter, setLetter] = useState('');
  const [round, setRound] = useState(1); // Número da rodada
  const navigate = useNavigate();

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
        height: '100vh',
        backgroundColor: '#001b33',
        backgroundImage: 'url(/assets/city-background.png)', // Caminho para a imagem do fundo da cidade
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Placa de rodada */}
      <Box
        component="img"
        src="/assets/round-plate.png" // Caminho para a imagem da placa de rodada
        alt="Placa de Rodada"
        sx={{
          position: 'absolute',
          top: '5%', // Ajuste a posição para alinhar no topo
          width: '180px', // Tamanho da placa
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          top: '7%', // Ajuste fino da posição do texto
          left: 'calc(50% - 30px)', // Centralizar o texto
          transform: 'translateX(-50%)',
          fontWeight: 'bold',
          fontSize: '18px',
          color: '#fff',
        }}
      >
        RODADA {round} / 5
      </Typography>

      {/* Letra sorteada */}
      <Box
        sx={{
          width: 200,
          height: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          border: '15px solid #333',
          borderRadius: '50%',
          clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
          marginTop: '15%', // Espaço entre a placa e a letra
        }}
      >
        <Typography sx={{ fontSize: '72px', color: '#fff', fontWeight: 'bold' }}>
          {letter}
        </Typography>
      </Box>

      {/* Botão para iniciar o jogo */}
      <Button
        variant="contained"
        onClick={handleStartGame} // Função que navega para a tela de GameScreen
        sx={{
          marginTop: 3,
          padding: '10px 20px',
          backgroundColor: '#f74440',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        INICIAR JOGO
      </Button>
    </Box>
  );
}

export default DrawLetter;
