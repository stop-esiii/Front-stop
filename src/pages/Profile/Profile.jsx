// src/pages/Profile/Profile.jsx
import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const userName = "Nome do Usuário"; // Aqui você pode obter o nome real do usuário autenticado

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
          clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
        }}
      >
        {/* Ícone de ajuda */}
        <IconButton
          onClick={() => console.log('Ajuda clicada')}
          sx={{ position: 'absolute', top: 8, right: 48, color: '#f74440' }}
        >
          <HelpIcon />
        </IconButton>

        {/* Ícone de configurações */}
        <IconButton
          onClick={() => console.log('Configurações clicadas')}
          sx={{ position: 'absolute', top: 8, right: 8, color: '#f74440' }}
        >
          <SettingsIcon />
        </IconButton>

        {/* Boas-vindas ao usuário */}
        <Typography sx={{ textAlign: 'center', color: '#f74440', fontWeight: 'bold', fontSize: '20px', marginBottom: 2 }}>
          Olá, {userName}
        </Typography>

        {/* Avatar */}
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: '#f74440',
            borderRadius: '50%',
            margin: '0 auto',
            marginBottom: 2,
          }}
        >
          {/* Aqui pode adicionar a imagem do avatar do usuário */}
        </Box>

        {/* Status da Conta */}
        <Typography sx={{ textAlign: 'center', color: '#000', fontWeight: 'bold', marginBottom: 2 }}>
          Conta Free <br />
          <Typography sx={{ color: '#f74440' }}>Seja Premium.</Typography>
        </Typography>

        {/* Botões de ações */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#f74440',
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 2,
          }}
          onClick={() => console.log('Criar partida clicada')}
        >
          CRIAR PARTIDA
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#f74440',
            color: '#fff',
            fontWeight: 'bold',
          }}
          onClick={() => console.log('Entrar em partida clicada')}
        >
          ENTRAR EM PARTIDA
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
