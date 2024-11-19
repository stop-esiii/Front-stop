import { Modal, Box, Typography, Grid, Button } from '@mui/material';
import WebSocket2 from '../../services/WebSocket';
import React, { useState, useEffect } from 'react';

function ValidationModal({ open, handleClose, round }) {
  const { roomCode, handleValidatedResults, handlesocket, socket } = WebSocket2();
  const [gameInfo, setGameInfo] = useState({});

  // Atualiza gameInfo com as respostas validadas
  const updateGameInfo = (data) => {
    const updatedGameInfo = { ...gameInfo, validate_responses: data };
    setGameInfo(updatedGameInfo);
    localStorage.setItem('gameInfo', JSON.stringify(updatedGameInfo));
  };

  // Listener para o evento do WebSocket
  useEffect(() => {
    const initializeSocketListeners = async () => {
      if (socket) {
        await socket.on('retrieve_validate_responses', (data) => {
          console.log(data)
          updateGameInfo(data);
        });

        // Carregar informações armazenadas no localStorage
        const storedGameInfo = JSON.parse(localStorage.getItem('gameInfo')) || {};
        setGameInfo(storedGameInfo);
      }
    };

    initializeSocketListeners();

    // Limpar os listeners ao desmontar o componente
    return () => {
      if (socket) {
        socket.off('retrieve_validate_responses');
      }
    };
  }, [socket]);

  return (
    <Modal open={open}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: '#001b33', // Azul escuro
          color: '#fff',
          borderRadius: '10px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 3, color: '#ffc94d' }}>
          Resultado da Validação
        </Typography>
        <Grid container spacing={2}>
          {gameInfo?.validate_responses?.map((response, index) => (
            <Grid item xs={6} key={index}>
              <Typography sx={{ fontWeight: 'bold', color: '#ffc94d', mb: 1 }}>
                {response?.tema || "Nenhum tema disponível"} : {response?.palavras_invalidas || ""}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography sx={{ color: '#ffc94d', fontWeight: 'bold', fontSize: '18px' }}>
            {/* Total de Palavras Corretas: {correctWords.length} */}
          </Typography>
          <Typography sx={{ color: '#e63946', fontWeight: 'bold', fontSize: '18px' }}>
            {/* Total de Palavras Erradas: {incorrectWords.length} */}
          </Typography>
        </Box>

        {/* Botão de Voltar */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{
              backgroundColor: '#00a86b', // Verde
              '&:hover': {
                backgroundColor: '#008a4f', // Verde mais escuro no hover
              },
            }}
          >
            Voltar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ValidationModal;
