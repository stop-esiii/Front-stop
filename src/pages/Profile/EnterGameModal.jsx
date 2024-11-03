import React, { useState,useEffect } from 'react';
import { Box,Dialog,DialogContent, Button, Typography, TextField, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import WaitingPlayersModal from "./WaitingPlayersModal.jsx"

function EnterGameModal({open, onClose,roomCode,handleJoinGame}) {
  const [code, setCode] = useState('');
  const [userinfo,setUserInfo] = useState({});
  const navigate = useNavigate();
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [gameInfo,setGameInfo] = useState({});
  const [isInLobby,setIsInLobby]=useState({});
  const [gameThemes,setGameThemes]=useState({});
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleCloseModal3 = () => {
    setModalOpen3(!isModalOpen3);  
};
  useEffect(() => {
    const userCache = JSON.parse(localStorage.getItem('userInfo'));

    if (userCache && userCache.token) {
        console.log(userCache.token);
        setUserInfo(userCache)
    } else {
        navigate("/");
    }
   
  }, []);

  useEffect(() => {
    const checkGameInfo = () => {
      const gameCache = JSON.parse(localStorage.getItem('gameInfo'));
  
      if (gameCache) {
        setGameInfo(gameCache);
        setGameThemes(gameCache.themes)
        setIsInLobby(true);
      } else {
        setIsInLobby(false);
      }
    };

    checkGameInfo();
    const intervalId = setInterval(checkGameInfo, 1000);
    return () => clearInterval(intervalId);
  }, []);


  const handleEnter = () => {
    const roomData = {
      code_lobby:code,
      id_user: userinfo.id,
      // themes: themes,
    };
    handleJoinGame('enter_lobby',roomData)
    console.log(code)
    setModalOpen3(true)
    // if(roomData){
    //   alert('ok')

    // }
  };

  return (
    <Box >
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" >
         <DialogContent sx={{ bgcolor: '#ffdd60', p: 3, position: 'relative' }}>
      {/* Ícone de voltar */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          color: '#f74440',
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      {/* Título */}
      <Typography
        variant="h6"
        sx={{ color: '#f74440', fontWeight: 'bold', textAlign: 'center' }}
      >
        ENTRAR EM PARTIDA
      </Typography>

      {/* Texto explicativo */}
      <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        INSIRA O CÓDIGO DE PARTIDA ABAIXO PARA PODER ENTRAR.
      </Typography>

      {/* Campo de texto para código */}
      <TextField
        variant="outlined"
        placeholder="Insira o código aqui."
        value={code}
        onChange={handleCodeChange}
        fullWidth
        InputProps={{
          sx: {
            bgcolor: '#fff',
            borderRadius: 2,
          },
        }}
      />

      {/* Botão de Entrar */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: '#f74440',
          color: '#fff',
          fontWeight: 'bold',
          borderRadius: 2,
          '&:hover': {
            bgcolor: '#f74440', // Manter a mesma cor no hover
          },
        }}
        onClick={handleEnter}
      >
        ENTRAR
      </Button>
      </DialogContent>
      </Dialog>
    
      <WaitingPlayersModal open={isModalOpen3} onClose={handleCloseModal3} gameCode= {code} game_themes={gameThemes}> </WaitingPlayersModal>
      
    </Box>
  );

}

export default EnterGameModal;
