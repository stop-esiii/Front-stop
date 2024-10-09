import React from 'react';
import { Dialog, DialogContent,Chip, Typography, Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const ModalWrapper = styled(Box)({
  backgroundColor: '#ffdd60',
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

const GameModal = ({ open, onClose, gameCode,game_themes }) => {
  return (
    <Dialog open={open} onClose={onClose}>
        <ModalWrapper>
          <BackArrow onClick={onClose}>⬅️</BackArrow>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            AGUARDANDO JOGADORES
          </Typography>
          <Typography variant="subtitle1">
            CÓDIGO DE PARTIDA: <span style={{ fontWeight: 'bold' }}>{gameCode}</span>
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: '20px' }} >
            TEMAS DA PARTIDA
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
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
            <PlayerBox>*NOME*</PlayerBox>
            <PlayerBox>*NOME*</PlayerBox>
            <PlayerBox>*NOME*</PlayerBox>
            <PlayerBox>*NOME*</PlayerBox>
          </PlayerGrid>
          
          <LoadingWrapper>
            <CircularProgress />
            
          </LoadingWrapper>
        </ModalWrapper>
    </Dialog>
  );
};

export default GameModal;
