import React, { useState } from 'react';
import { Box,Dialog,DialogContent, Button, Typography, TextField, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function EnterGameModal({open, onClose}) {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleEnter = () => {
    // Lógica para entrar na partida com o código inserido
    // onEnterClick(code);
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
