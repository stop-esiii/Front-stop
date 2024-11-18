import React from 'react';
import { Modal, Box, Typography, Grid } from '@mui/material';

function ValidationModal({ open, handleClose, correctWords, incorrectWords, themes }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: '#001b33', // Azul escuro
          color: '#fff',
          borderRadius: '10px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 3, color: '#ffc94d' }}>
          Resultado da Validação
        </Typography>
        <Grid container spacing={2}>
          {themes.map((theme, index) => (
            <React.Fragment key={index}>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 'bold', color: '#ffc94d', mb: 1 }}>{theme}</Typography>
              </Grid>
              <Grid item xs={6}>
                {correctWords[index] && (
                  <Box
                    sx={{
                      display: 'inline-block',
                      px: 2,
                      py: 1,
                      backgroundColor: '#00a86b', // Verde para certo
                      color: '#fff',
                      borderRadius: '5px',
                      m: 0.5,
                    }}
                  >
                    {correctWords[index]}
                  </Box>
                )}
                {incorrectWords[index] && (
                  <Box
                    sx={{
                      display: 'inline-block',
                      px: 2,
                      py: 1,
                      backgroundColor: '#e63946', // Vermelho para errado
                      color: '#fff',
                      borderRadius: '5px',
                      m: 0.5,
                    }}
                  >
                    {incorrectWords[index]}
                  </Box>
                )}
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography sx={{ color: '#ffc94d', fontWeight: 'bold', fontSize: '18px' }}>
            Total de Palavras Corretas: {correctWords.length}
          </Typography>
          <Typography sx={{ color: '#e63946', fontWeight: 'bold', fontSize: '18px' }}>
            Total de Palavras Erradas: {incorrectWords.length}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default ValidationModal;