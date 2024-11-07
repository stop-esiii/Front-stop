import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import loading_gif from './Loading-Stop.gif'
import './gif.css'
import React, { useState, useEffect } from 'react';
import { Dialog, Chip, Typography, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getItem } from "../../services/StorageService";
import { BASE_URL } from '../../Utils/system';
import WebSocket from '../../services/WebSocket';

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


const leave_lobby = () => {

}

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
function SeeOtherPlayers() {
  if ([]) {
    return <PlayerBox>Jogador 2</PlayerBox>
  }
}

function GameModal({ open, onClose, gameCode, game_themes }) {
  const navigate = useNavigate();
  const [gameInfo, setGameInfo] = useState({});
  const [userinfo,setUserInfo] = useState({});
  const [isInLobby, setIsInLobby] = useState({});
  const [gameThemes, setGameThemes] = useState({});
  const { players = [] } = WebSocket(); // 


  const setInfoUserLOgger = () => {}
  
  useEffect(() => {
    console.log(players);
    
    const checkGameInfo = () => {

      setGameInfo(JSON.parse(getItem('gameInfo')));


      if (gameInfo) {
        setGameInfo(gameInfo);
        setIsInLobby(true);
      } else {
        setIsInLobby(false);
      }
    };

    checkGameInfo();
    const intervalId = setInterval(checkGameInfo, 1000);
    return () => clearInterval(intervalId);
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
          <Themes gameThemes={game_themes}></Themes>
        </Box>

        <PlayerGrid>
          <PlayerBox>{userinfo.username}</PlayerBox>
          {players.map((player, index) => (
            < PlayerBox key={index}>{player}</PlayerBox>
          ))}
        </PlayerGrid>

        <div className="gif-container">
          <img src={loading_gif} alt="loading" className="gif"></img>
        </div>

      </ModalWrapper>
    </Dialog>
  );
};

export default GameModal;
