import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Image, StyleSheet} from 'react';
import loading_gif from './Loading-Stop.gif'
import './gif.css'
import React, {useState, useEffect} from 'react';
import { Dialog, DialogContent,Chip, Typography, Box, CircularProgress,IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';

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
function PLayer2({ name, isInLobby }) {
  if (isInLobby) {
    return <PlayerBox>Jogador 2</PlayerBox>
  }
}

function GameModal  ({ open, onClose, gameCode,game_themes }) {
  const navigate = useNavigate();
  const [userinfo,setUserInfo] = useState({});
  
  useEffect(() => {
      const userCache = JSON.parse(localStorage.getItem('userInfo'));
      
      if (userCache && userCache.token) {
          console.log("Token encontrado");
          setUserInfo(userCache)
      } else {
          navigate("/");
      }
      
  }, []);

  
  return (
    <Dialog open={open} onClose={onClose}>
        <ModalWrapper>
        
          <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, left: 8, color: '#f74440' }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            AGUARDANDO JOGADORES
          </Typography>
          <Typography variant="subtitle1">
            CÓDIGO DE PARTIDA: <span style={{ fontWeight: 'bold' }}>{gameCode}</span>
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: '20px' }} >
            TEMAS DA PARTIDA
          </Typography>
          <Box display="flex" alignContent="center" flexWrap="wrap" gap={1} mb={2}>
                {game_themes.map((theme) => (
                    <Chip
                    key={theme}
                    label={theme}
                    // onDelete={() => handleDeleteTheme(theme)}
                    sx={{ bgcolor: '#ff7043', color: '#fff' }}
                    />
                ))}
                </Box>
          
          <PlayerGrid>
            <PlayerBox>{userinfo.username}</PlayerBox>
            <PLayer2></PLayer2>
          </PlayerGrid>
          
          <div className="gif-container">
            <img src={loading_gif} alt="loading" className="gif"></img>
          </div>
            
        </ModalWrapper>
    </Dialog>
  );
};

export default GameModal;
