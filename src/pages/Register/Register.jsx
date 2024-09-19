// src/pages/Register/Register.js
import React from 'react';
import { TextField, Button, Box, IconButton, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

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
        {/* Ícone de voltar */}
        <IconButton
          onClick={() => navigate('/')}
          sx={{ position: 'absolute', left: 8, top: 8, color: '#f74440' }}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Título */}
        <Box sx={{ textAlign: 'center', color: '#f74440', fontWeight: 'bold', fontSize: '24px', marginBottom: 2 }}>
          CADASTRO
        </Box>

        {/* Botão Google */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#fff',
            color: '#f74440',
            marginBottom: 2,
            fontWeight: 'bold',
          }}
        >
          CONTINUAR COM GOOGLE
        </Button>

        {/* Linha divisória */}
        <Divider sx={{ marginBottom: 2 }}>
          <Box sx={{ fontWeight: 'bold', color: '#f74440' }}>OU</Box>
        </Divider>

        {/* Formulário de cadastro */}
        <TextField
          label="Nome"
          placeholder="Insira seu nome aqui."
          fullWidth
          margin="dense"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="E-mail"
          placeholder="Insira seu e-mail aqui."
          fullWidth
          margin="dense"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Senha"
          type="password"
          placeholder="Insira sua senha aqui."
          fullWidth
          margin="dense"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Confirmar Senha"
          type="password"
          placeholder="Insira sua senha novamente."
          fullWidth
          margin="dense"
          sx={{ marginBottom: 2 }}
        />

        {/* Botão Cadastrar */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#f74440',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: 2,
          }}
        >
          CADASTRAR
        </Button>
      </Box>
    </Box>
  );
}

export default Register;
