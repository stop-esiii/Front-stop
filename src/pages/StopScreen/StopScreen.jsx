// src/pages/StopScreen/StopScreen.jsx
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function StopScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirecionar para a próxima tela (ex: validação) após 5 segundos
    const timer = setTimeout(() => {
      navigate('/validation'); // Ajuste a rota de destino conforme necessário
    }, 5000);

    return () => clearTimeout(timer); // Limpar o temporizador ao desmontar
  }, [navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo com opacidade para dar destaque à placa de STOP
        flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        src="./assets/PlacaDePare.png" // Caminho para a imagem da placa de STOP
        alt="STOP"
        sx={{
          width: '300px', // Ajuste o tamanho da imagem conforme necessário
          height: '300px',
        }}
      />
    </Box>
  );
}

export default StopScreen;
