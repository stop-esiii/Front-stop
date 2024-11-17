// src/pages/GameScreen/GameScreen.jsx

import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import DrawLetter from '../DrawLetter/DrawLetter';
import WebSocket2 from '../../services/WebSocket';
import StopModal from '../StopModal/stop';
import handlerTriggerStop from '../../services/WebSocket';
import handleReceiveStop from '../../services/WebSocket';
const themesList = [
  "Frutas", "Animais", "Cores", "CEP (Cidades, Estados e Países)", "Filmes", "Nomes próprios", "Profissões", "Objetos",
  "Flores", "Times de futebol", "Marcas", "Personagens fictícios", "Comidas", "Atores/Actrizes", "Cantores/Bandas",
  "Celebridades", "Adjetivos", "Programas de TV", "Doenças", "Hobbies", "Super-heróis", "Instrumentos musicais", "Carros",
  "Rios", "Línguas", "Esportes", "Partes do corpo", "Bebidas", "Plantas", "Tecnologia"
];


function GameScreen() {
    
  const { roundTime } = WebSocket2();
  const location = useLocation();
  const { time } = location.state || 0;
  const navigate = useNavigate();
  const [selectedThemes, setSelectedThemes] = useState({});
  const [timeLeft, setTimeLeft] = useState(parseInt(time)); // Tempo em segundos
  const [isDrawLetterOpen, setIsDrawLetterOpen] = useState(true);
  const [isStopOpen, setIsStopOpen] = useState(false);
  const [gameInfo, setGameInfo] = useState({});
  const [round, setRound] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  useEffect(() => {
    // Validar preenchimento dos campos para habilitar o botão
    const allFilled = Object.values(selectedThemes).every((value) => value?.trim() !== '');
    setIsButtonDisabled(!allFilled);
  }, [selectedThemes]);

  useEffect(() => {
    const storedGameInfo = JSON.parse(localStorage.getItem('gameInfo'));
    setGameInfo(storedGameInfo);
  }, []);

  const handlerInputChange = (theme, e) => {
    setSelectedThemes({ ...selectedThemes, [theme]: e.target.value, });
  }
  // Lógica do contador de tempo e rounds
  useEffect(() => {
    let timer;

    if (timeLeft > 0 && !isDrawLetterOpen) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && round < gameInfo.rounds - 1) {
      setRound((prevRound) => prevRound + 1);
      setTimeLeft(time);
      handleStopOpen()
      setIsDrawLetterOpen(true);

      handlerTriggerStop('trigger_stop', { code_lobby:JSON.parse(localStorage.getItem('gameInfo')).code_lobby });
      handleReceiveStop('receive_stop', {
        code_lobby:JSON.parse(localStorage.getItem('gameInfo')).code_lobby,
        id_user: JSON.parse(localStorage.getItem('gameInfo')).id,
        double_points: false,
        autocomplete: false,
        receive_payload: selectedThemes
      });


    } else if (timeLeft === 0 && round >= gameInfo.rounds - 1) {
      handleStopOpen()
    }

    return () => clearInterval(timer);
  }, [timeLeft, isDrawLetterOpen, gameInfo, round, navigate]);

  const handleDrawLetterClose = () => {
    setIsDrawLetterOpen(false);
  };

  const handleStopOpen = () => {
    setRound((prevRound) => prevRound + 1);
    setTimeLeft(time + 2)
    setIsStopOpen(true)

    handlerTriggerStop('trigger_stop', { code_lobby: JSON.parse(localStorage.getItem('gameInfo')).code_lobby });
    handleReceiveStop('receive_stop', {
      code_lobby: JSON.parse(localStorage.getItem('gameInfo')).code_lobby,
      id_user: JSON.parse(localStorage.getItem('gameInfo')).id,
      double_points: false,
      autocomplete: false,
      receive_payload: selectedThemes
    });

    if (round >= gameInfo.rounds - 1) {
      navigate('/validation', { state: { letter: 'A', category: 'CEP' } });
    }
  }
  const handleStopClose = () => {
    setIsStopOpen(false);
  };


  const handleStop = () => {
    navigate("/stop");
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
        zIndex: 200
      }}
    >
      {isDrawLetterOpen && (
        <DrawLetter onClose={handleDrawLetterClose} rounds={round + 1} numRounds={gameInfo.rounds} finalLetter={gameInfo.letters ? gameInfo.letters[round].toUpperCase().replaceAll("'", "") : ""} />
      )}

      {isStopOpen && (
        <StopModal onClose={handleStopClose} onLastRound={round >= gameInfo.rounds - 1}></StopModal>
      )}
      <Typography sx={{ fontWeight: 'bold', fontSize: '24px', color: '#fff', marginBottom: 2 }}>
        LETRA: {gameInfo.letters ? gameInfo.letters[round].toUpperCase().replaceAll("'", "") : ""}
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
              onChange={(e) => { handlerInputChange(theme, e) }}
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
          RODADA: {round + 1} / {gameInfo.rounds}
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
}

export default GameScreen;
