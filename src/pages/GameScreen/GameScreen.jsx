import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import DrawLetter from '../DrawLetter/DrawLetter';
import WebSocket2 from '../../services/WebSocket';
import StopModal from '../StopModal/stop';
import ValidationModal from '../ValidateModal/validate';

const GameScreen = () => {
  const { roomCode, handleReceiveStop, handleTriggerStop, handleReturnStop, validateStop, socket } = WebSocket2();
  const location = useLocation();
  const { time } = location.state || 0;
  const navigate = useNavigate();

  const [selectedThemes, setSelectedThemes] = useState({});
  const [timeLeft, setTimeLeft] = useState(parseInt(time));
  const [isDrawLetterOpen, setIsDrawLetterOpen] = useState(true);
  const [isValidatedOpen, setIsValidatedOpen] = useState(false);
  const [isStopOpen, setIsStopOpen] = useState(false);
  const [gameInfo, setGameInfo] = useState({});
  const [round, setRound] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Abertura do Modal de Validação

  const handleValidatedClose = () => {
    setIsValidatedOpen(false); // Fechar modal
  };

  useEffect(() => {

    if (round > gameInfo.rounds) {
      setTimeLeft(time);
      setIsStopOpen(true);
      setIsValidatedOpen(true)
      handleReturnStop('return_stop', {
        code_lobby: JSON.parse(localStorage.getItem('userInfo')).roomCode,
      });
    }
  }, [setRound, round, navigate]);

  // Escutar evento 'trigger_stop' no WebSocket
  useEffect(() => {
    if (socket) {
      socket.on('trigger_stop', handleStopListener);
    }
    return () => {
      if (socket) {
        socket.off('trigger_stop', handleStopListener);
      }
    };
  }, [socket]);

  // Obter informações do jogo no início
  useEffect(() => {
    const storedGameInfo = JSON.parse(localStorage.getItem('gameInfo'));
    setGameInfo(storedGameInfo);
  }, []);

  // Gerenciar o cronômetro
  useEffect(() => {
    let timer;

    // Só iniciar o cronômetro se o tempo for maior que 0 e nenhum modal importante estiver aberto
    if (timeLeft > 0 && !isDrawLetterOpen && !isValidatedOpen) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

    // Quando o tempo chegar a 0, disparar o evento de parada
    if (timeLeft === 0) {
      handleStopOpen();
    }

    return () => clearInterval(timer); // Limpar o intervalo ao desmontar ou mudar dependências
  }, [timeLeft, isDrawLetterOpen, isValidatedOpen]);


  const handleInputChange = (theme, e) => {
    setSelectedThemes({ ...selectedThemes, [theme]: e.target.value });
  };

  const handleDrawLetterClose = () => {
    setIsDrawLetterOpen(false);
  };

  const handleStopOpen = () => {
    if (gameInfo.letters) {
      validateStop('validate_responses', {
        code_lobby: JSON.parse(localStorage.getItem('userInfo')).roomCode,
        letra: gameInfo.letters[round - 1].toUpperCase(),
      });
    }
    // setTimeLeft(time);
    // setIsStopOpen(true);
    console.log(selectedThemes)

    handleTriggerStop('trigger_stop', {
      code_lobby: JSON.parse(localStorage.getItem('userInfo')).roomCode,
    });

    // Receber dados do jogador
    handleReceiveStop('receive_stop', {
      code_lobby: JSON.parse(localStorage.getItem('userInfo')).roomCode,
      id_user: JSON.parse(localStorage.getItem('userInfo')).id,
      double_points: false,
      autocomplete: false,
      receive_payload: selectedThemes,
    });
  };

  const handleStopListener = async () => {

    setSelectedThemes({});
    setRound((prevRound) => prevRound + 1);
    setTimeLeft(time);
    setIsStopOpen(true);
    setIsDrawLetterOpen(true);
    if (JSON.parse(localStorage.getItem('userInfo')).host === true && gameInfo.letters) {
      validateStop('validate_responses', {
        code_lobby: JSON.parse(localStorage.getItem('userInfo')).roomCode,
        letra: gameInfo.letters[round - 1].toUpperCase(),
      });
    }
  };

  const handleStopClose = () => {
    setIsStopOpen(false); // Fecha StopModal
    setTimeout(() => setIsValidatedOpen(true), 300); // Abre ValidationModal após um atraso pequeno
    setTimeout(() => setIsValidatedOpen(false), 20000);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 200,
      }}
    >
      {isDrawLetterOpen && (
        <DrawLetter
          onClose={handleDrawLetterClose}
          rounds={round}
          numRounds={gameInfo.rounds}
          finalLetter={
            gameInfo.letters && gameInfo.letters[round - 1]
              ? gameInfo.letters[round - 1].toUpperCase()
              : ""
          }
        />
      )}

      {isStopOpen && (
        <StopModal onClose={handleStopClose} onLastRound={round >= gameInfo.rounds - 1} />
      )}

      {isValidatedOpen && (
        <ValidationModal open={isValidatedOpen} close={handleValidatedClose} round={round - 1} />
      )}

      <Typography sx={{ fontWeight: 'bold', fontSize: '24px', color: '#fff', marginBottom: 2 }}>
        LETRA: {gameInfo.letters && gameInfo.letters[round - 1] ? gameInfo.letters[round - 1].toUpperCase() : ""}
      </Typography>


      <Box
        sx={{
          width: 600,
          padding: 3,
          borderRadius: 4,
          backgroundColor: '#333',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          textAlign: 'center',
        }}
      >
        {gameInfo.themes && gameInfo.themes.map((theme, index) => (
          <Box key={index}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#fff', marginBottom: 1 }}>
              {theme}
            </Typography>
            <TextField
              placeholder="Escreva aqui..."
              variant="outlined"
              fullWidth
              key={theme}
              label={theme}
              value={selectedThemes[theme] || ""}
              onChange={(e) => handleInputChange(theme, e)}
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1,
              }}
            />
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 400, marginTop: 3 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#fff' }}>
          RODADA: {round} / {gameInfo.rounds}
        </Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#fff' }}>
          TEMPO: {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:{String(timeLeft % 60).padStart(2, '0')}
        </Typography>
      </Box>

      <Button
        variant="contained"
        disabled={isButtonDisabled}
        onClick={handleStopOpen}
        sx={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: '#f74440',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '18px',
          marginTop: 3,
        }}
      >
        STOP
      </Button>
    </Box>
  );
};

export default GameScreen;
