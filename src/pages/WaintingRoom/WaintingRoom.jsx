import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StopIcon from '@mui/icons-material/Stop';
import { useNavigate, useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';

const WaitingRoom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [players, setPlayers] = useState([]);
  const [lobbyCode, setLobbyCode] = useState('000000');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    // Listener para quando jogadores entram no lobby
    newSocket.on('player_joined', (playerData) => {
      setPlayers(current => [...current, playerData]);
    });

    // Listener para quando jogadores saem do lobby
    newSocket.on('player_left', (playerId) => {
      setPlayers(current => current.filter(player => player.id !== playerId));
    });

    return () => {
      if (socket) {
        socket.emit('leave_lobby', {
          code_lobby: lobbyCode,
          id_user: 1 // Substitua pelo ID do usuário logado
        });
        socket.disconnect();
      }
    };
  }, []);

  // Tratamento de saída implícita
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (socket) {
        socket.emit('leave_lobby', {
          code_lobby: lobbyCode,
          id_user: 1 // Substitua pelo ID do usuário logado
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [socket, lobbyCode]);

  const handleBack = () => {
    if (socket) {
      socket.emit('leave_lobby', {
        code_lobby: lobbyCode,
        id_user: 1 // Substitua pelo ID do usuário logado
      });
    }
    navigate('/game-options');
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: 'primary.main'
      }}
    >
      <Box 
        sx={{
          width: '600px',
          p: 4,
          bgcolor: 'secondary.main',
          position: 'relative',
          borderRadius: 4,
          border: '10px solid',
          borderColor: 'primary.main',
          clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
        }}
      >
        {/* Header com botão de voltar e título */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <IconButton 
            onClick={handleBack}
            sx={{ color: 'primary.main' }}
          >
            <ArrowBackIcon />
          </IconButton>
          
          <Typography 
            variant="h5"
            sx={{ 
              fontWeight: 'bold',
              color: 'primary.main',
              textAlign: 'center'
            }}
          >
            AGUARDANDO JOGADORES
          </Typography>

          <StopIcon sx={{ 
            color: 'primary.main',
            fontSize: 40,
            transform: 'rotate(45deg)'
          }} />
        </Box>

        {/* Código da partida */}
        <Typography 
          sx={{ 
            textAlign: 'center',
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 4
          }}
        >
          CÓDIGO DE PARTIDA: {lobbyCode}
        </Typography>

        {/* Grid de jogadores */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 3
        }}>
          {[...Array(4)].map((_, index) => (
            <Box 
              key={index}
              sx={{
                aspectRatio: '1/1',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            >
              <Typography sx={{ 
                color: 'white',
                fontWeight: 'bold'
              }}>
                {players[index]?.username || '*NOME*'}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WaitingRoom;