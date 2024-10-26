import React from 'react';
import { Box, Button, Typography, TextField, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GameOptions() {
  const navigate = useNavigate();

  const handleCreateGame = () => {
    // Redirecionar para a tela de sorteio de letra com o número total de rodadas
    navigate('/draw-letter', { state: { totalRounds: 5 } });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f74440',
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 3,
          borderRadius: 4,
          backgroundColor: '#ffc94d',
          position: 'relative',
          border: '10px solid #f74440',
          clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
        }}
      >
        {/* Botão para voltar */}
        <IconButton
          onClick={() => navigate('/profile')}
          sx={{ position: 'absolute', top: 8, left: 8, color: '#f74440' }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography sx={{ textAlign: 'center', color: '#f74440', fontWeight: 'bold', fontSize: '20px', marginBottom: 2 }}>
          OPÇÕES DE PARTIDA
        </Typography>

        {/* Aqui ficam as opções de tempo, rodadas, jogadores e temas... */}

        {/* Botão para criar partida */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleCreateGame} // Navegar para a tela de sorteio de letra
          sx={{
            backgroundColor: '#f74440',
            color: '#fff',
            fontWeight: 'bold',
            marginTop: 2,
          }}
        >
          CRIAR
        </Button>
      </Box>
    </Box>
  );
}

export default GameOptions;

