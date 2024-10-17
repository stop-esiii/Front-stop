import React, { useState,useEffect } from 'react';
import { Box,Dialog,DialogContent, Button, Typography, TextField, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';

function EnterGameModal({open, onClose,roomCode,handleJoinGame}) {
  const [code, setCode] = useState('');
  const [userinfo,setUserInfo] = useState({});
  const navigate = useNavigate();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
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

  const handleEnter = () => {
    const roomData = {
      code_lobby:code,
      id_user: userinfo.id,
      // themes: themes,
    };
    handleJoinGame('enter_lobby',roomData)
    console.log(code)
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
    </Box>
  );
}

export default EnterGameModal;
