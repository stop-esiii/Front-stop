import React, { useState,useEffect } from 'react';
import { Dialog, DialogContent, Button, TextField, Typography, Chip, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom';
import io from 'socket.io-client';
import useWebSocket from "../../services/WebSocket.js"
import WaitingPlayersModal from "./WaitingPlayersModal.jsx"

function GameOptionsModal({ open, onClose,handleCreateGame,roomCode,game_themes }) {
  const [themes, setThemes] = useState(['CEP', 'FRUTA']);
  const [newTheme, setNewTheme] = useState('');
  const [selectedTime, setSelectedTime] = useState('1 MIN'); 
  const [selectedRounds, setSelectedRounds] = useState('5'); 
  const [userinfo,setUserInfo] = useState({});
  const navigate = useNavigate();

  const [isModalOpen3, setModalOpen3] = useState(false);
 


  const handleCloseModal3 = () => {
    setModalOpen3(!isModalOpen3);  // Fecha o modal
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


    const handleJoinRoom = () => {
        const roomData = {
            id_user: userinfo.id,
            time: selectedTime,
            rounds: selectedRounds,
            max_members: 10,
            // themes: themes,
        };
        alert("a")
        handleCreateGame('create_lobby',roomData)
        console.log(roomCode)
        if(roomData){
          setModalOpen3(true)

        }
        // handleClickInsideModal()
    };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);  // Atualiza o estado com o valor selecionado
  };

  const handleRoundsSelect = (rounds) => {
    setSelectedRounds(rounds);  // Atualiza o estado com o valor selecionado
  };

  const handleAddTheme = () => {
    if (newTheme.trim() !== '') {
      
      setNewTheme('');
    }
  };

  const handleDeleteTheme = (themeToDelete) => {
    setThemes(themes.filter((theme) => theme !== themeToDelete));
  };

  return (
    <Box >
 <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" >
      <DialogContent sx={{ bgcolor: '#ffdd60', p: 3, position: 'relative' }}>
        {/* Back Button */}
        <IconButton 
          onClick={onClose} 
          sx={{ position: 'absolute', top: 8, left: 8, color: '#f74440' }}>
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" align="center" sx={{ color: '#f74440', fontWeight: 'bold', mb: 2 }}>
          OPÇÕES DE PARTIDA
        </Typography>

        {/* Time Selection */}
        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>TEMPO:</Typography>
         {/* Botões de seleção de tempo */}
      <Box display="flex" gap={2}>
        <Button
          variant={selectedTime === '1 MIN' ? 'contained' : 'outlined'}  // Destaque o botão selecionado
          sx={{
            bgcolor: selectedTime === '1 MIN' ? '#f74440' : 'transparent',  // Cor de fundo condicional
            color: selectedTime === '1 MIN' ? '#fff' : '#f74440',            // Cor do texto condicional
            borderColor: '#f74440'
          }}
          onClick={() => handleTimeSelect('1 MIN')}  // Define o tempo selecionado
        >
          1 MIN
        </Button>
        <Button
          variant={selectedTime === '1:30 MIN' ? 'contained' : 'outlined'}
          sx={{
            bgcolor: selectedTime === '1:30 MIN' ? '#f74440' : 'transparent',
            color: selectedTime === '1:30 MIN' ? '#fff' : '#f74440',
            borderColor: '#f74440'
          }}
          onClick={() => handleTimeSelect('1:30 MIN')}
        >
          1:30 MIN
        </Button>
      </Box>

        {/* Rounds Selection */}
        <Typography sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>RODADAS:</Typography>
        <Box display="flex" gap={2}>
        <Button
          variant={selectedRounds === '5' ? 'contained' : 'outlined'}  // Destaque o botão selecionado
          sx={{
            bgcolor: selectedRounds === '5' ? '#f74440' : 'transparent',  // Cor de fundo condicional
            color: selectedRounds === '5' ? '#fff' : '#f74440',            // Cor do texto condicional
            borderColor: '#f74440'
          }}
          onClick={() => handleRoundsSelect('5')}  // Define o tempo selecionado
        >
          5
        </Button>
        <Button
          variant={selectedRounds === '10' ? 'contained' : 'outlined'}
          sx={{
            bgcolor: selectedRounds === '10' ? '#f74440' : 'transparent',
            color: selectedRounds === '10' ? '#fff' : '#f74440',
            borderColor: '#f74440'
          }}
          onClick={() => handleRoundsSelect('10')}
        >
          10
        </Button>
      </Box>

        {/* Players Selection
        <Typography sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>NÚMERO DE JOGADORES:</Typography>
        <Box display="flex" gap={2}>
          <Button variant="contained" sx={{ bgcolor: '#f74440', color: '#fff' }}>5</Button>
          <Button variant="outlined" sx={{ color: '#f74440', borderColor: '#f74440' }}>10</Button>
        </Box> */}

        {/* Themes Section */}
       

        {/* Premium Section */}
        <Typography sx={{ fontSize: '12px', textAlign: 'center', mt: 2 }}>
          SEJA PREMIUM PARA CRIAR PARTIDAS DE FORMA ILIMITADA.
        </Typography>

        {/* Create Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ bgcolor: '#f74440', color: '#fff', mt: 2, fontWeight: 'bold'
        }}
        onClick={() => handleJoinRoom()}
        aria-label={"Criar nova Sala"}
        >
          CRIAR
        </Button>
      </DialogContent>
    </Dialog>

    <WaitingPlayersModal open={isModalOpen3} onClose={handleCloseModal3} gameCode= {roomCode} game_themes={game_themes}> </WaitingPlayersModal>

    </Box>
   
  );
}

export default GameOptionsModal;