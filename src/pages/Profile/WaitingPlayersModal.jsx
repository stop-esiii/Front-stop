import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Image, StyleSheet } from 'react';
import loading_gif from './Loading-Stop.gif'
import './gif.css'
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, Chip, Typography, DialogTitle, Box, CircularProgress, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const ModalWrapper = styled(Box)({
  backgroundColor: '#FFC44D',
  padding: '20px',
  width: '400px',
  textAlign: 'center',
  position: 'relative',
});

const PlayerBox = styled(Box)({
  width: '80px',
  height: '80px',
  backgroundColor: '#e94e4e',
  borderRadius: '50%',
  margin: '10px auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const PlayerGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
  marginTop: '20px',
});

const BackArrow = styled(Box)({
  position: 'absolute',
  top: '10px',
  left: '10px',
  fontSize: '20px',
  cursor: 'pointer',
});

const LoadingWrapper = styled(Box)({
  position: 'absolute',
  top: '10px',
  right: '10px',
});

function Themes({ gameThemes }) {
  if (gameThemes) {
    return <>
      {gameThemes.map((theme) => (
        <Chip
          key={theme}
          label={theme}
          // onDelete={() => handleDeleteTheme(theme)} // Descomente se precisar da funcionalidade de exclusão
          sx={{ bgcolor: '#ff7043', color: '#fff' }}
        />
      ))}
    </>
  }
}
function PLayer2({ isInLobby }) {
  if (isInLobby === true) {
    return <PlayerBox></PlayerBox>
  }
}


function GameModal({ open, onClose, gameCode, game_themes }) {
  const navigate = useNavigate();
  const [userinfo, setUserInfo] = useState({});
  const [gameInfo, setGameInfo] = useState({});
  const [isInLobby, setIsInLobby] = useState({});
  const [gameThemes, setGameThemes] = useState({});

  useEffect(() => {
    const userCache = JSON.parse(localStorage.getItem('userInfo'));

    if (userCache && userCache.token) {
      console.log("Token encontrado");
      setUserInfo(userCache)
    } else {
      navigate("/");
    }
  }, []);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const gameData = JSON.parse(localStorage.getItem('gameInfo'));
    if (gameData && gameData.users) {
      setUsers(gameData.users);
    }
  }, []);
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" PaperProps={{
      sx: {
        borderRadius: '20px',
        backgroundColor: '#084080',
        border: '10px solid #201E1D',
        width: '500px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      },
    }}>
      <DialogTitle
        sx={{
          textAlign: 'center',
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: '25px',
          position: 'relative',
          backgroundColor: '#201E1D'
        }}
      >
        <IconButton
          aria-label="back"
          onClick={onClose}
          sx={{
            position: 'absolute',
            left: 8,
            top: 8,
            color: '#FFFFFF',
            backgroundColor: '#EB2D37',
            border: '5px #EB2D37 solid',
          }}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          AGUARDANDO JOGADORES
        </Typography>

      </DialogTitle>

      <DialogContent sx={{ bgcolor: '#084080', p: 3, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
        <Typography variant="subtitle1" sx={{ color: 'white', marginTop: 10, fontWeight: 'bold' }}>
          CÓDIGO DE PARTIDA: <span style={{ fontWeight: 'bold', marginTop: 10, color: "white" }}>{gameCode}</span>
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: '20px', color: 'white' }} >
          TEMAS DA PARTIDA
        </Typography>
        <Box display="flex" alignContent="center" flexWrap="wrap" gap={1} mb={2}>
          <Themes gameThemes={game_themes}></Themes>
        </Box>

        <PlayerGrid>
          {users.map((user, index) => (
            <PlayerBox key={index}>
              {user.username}
            </PlayerBox>
          ))}
        </PlayerGrid>
        {Array.isArray(users)? (
          <Button>Iniciar Partida</Button>
        ) : (
          <div className="gif-container">
            <img src={loading_gif} alt="loading" className="gif"></img>
          </div>
        )}


      </DialogContent>
      <div>
      </div>

    </Dialog>
  );
};

export default GameModal;
