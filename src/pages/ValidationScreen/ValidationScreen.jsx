// src/pages/ValidationScreen/ValidationScreen.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

function ValidationScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  const wordsToValidate = location.state?.words || [
    { word: 'Argentina', isValid: true },
    { word: 'Alemanha', isValid: true },
    { word: 'Austrália', isValid: false },
    { word: 'Angola', isValid: true },
    { word: 'Armênia', isValid: false },
  ];

  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          handleValidationComplete();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleValidationComplete = () => {
    console.log('Validação concluída');
    navigate('/next-step'); // Altere para a rota que deseja
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#001b33',
        backgroundImage: 'url(/assets/city-background.png)',
        backgroundSize: 'cover',
        flexDirection: 'column',
      }}
    >
      {/* Letra e categoria */}
      <Typography sx={{ fontWeight: 'bold', fontSize: '24px', color: '#fff', textAlign: 'center', marginBottom: 1 }}>
        LETRA: {location.state?.letter || 'A'}
      </Typography>
      <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: '#ff6f61', textAlign: 'center', marginBottom: 3 }}>
        VALIDAÇÃO: {location.state?.category || 'CEP'}
      </Typography>

      {/* Container de palavras para validação */}
      <Box
        sx={{
          width: 450,
          padding: 3,
          borderRadius: 2,
          backgroundColor: '#0d1b2a',
          border: '5px solid #ff6f61',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
          textAlign: 'center',
        }}
      >
        {wordsToValidate.map((item, index) => (
          <Box key={index} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '16px',
                color: item.isValid ? '#fff' : '#000',
                backgroundColor: item.isValid ? '#4caf50' : '#f44336',
                borderRadius: 1,
                padding: '5px 10px',
                width: '100px',
              }}
            >
              {item.word}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  minWidth: '40px',
                  padding: '5px',
                }}
              >
                ✓
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f44336',
                  color: '#fff',
                  minWidth: '40px',
                  padding: '5px',
                }}
              >
                ✗
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Contador de tempo */}
      <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#ff6f61', marginTop: 2 }}>
        TEMPO: {timeLeft}
      </Typography>

      {/* Botão de validar */}
      <Button
        variant="contained"
        onClick={handleValidationComplete}
        sx={{
          backgroundColor: '#ff6f61',
          color: '#fff',
          fontWeight: 'bold',
          width: 150,
          height: 50,
          marginTop: 3,
        }}
      >
        VALIDAR
      </Button>
    </Box>
  );
}

export default ValidationScreen;
