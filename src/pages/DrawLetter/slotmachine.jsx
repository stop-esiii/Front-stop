import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

// Keyframes para a animação de rolagem
const scrollAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

// Keyframes para o efeito de blur durante a rolagem
const blurAnimation = keyframes`
  0% {
    filter: blur(0px);
  }
  50% {
    filter: blur(5px);
  }
  100% {
    filter: blur(0px);
  }
`;

const LetterSlotMachine = ({gameLetters,finalLetter, onAnimationComplete}) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [displayedLetters, setDisplayedLetters] = useState([]);

  // Gera uma sequência aleatória de letras para a animação
  useEffect(() => {
    const letters = [];
    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * gameLetters.length);
      letters.push(gameLetters[randomIndex]);
    }
    // Adiciona a letra final ao fim da sequência
    letters.push(finalLetter);
    setDisplayedLetters(letters);

    // Timer para parar a animação
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 2000); // 3 segundos de animação

    return () => clearTimeout(timer);
  }, [finalLetter, onAnimationComplete,gameLetters]);

  return (
    <Box
      sx={{
        width: 200,
        height: 200,
        backgroundColor: '#000',
        border: '15px solid #333',
        borderRadius: '50%',
        clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Reflexo superior */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Container das letras */}
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          animation: isAnimating
            ? `${scrollAnimation} 5s cubic-bezier(0.4, 0.0, 0.2, 1)`
            : 'none',
          animationFillMode: 'forwards',
        }}
      >
        {displayedLetters.map((letter, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: '72px',
              color: '#fff',
              fontWeight: 'bold',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: isAnimating
                ? `${blurAnimation} 0.2s ease-in-out infinite`
                : 'none',
              textShadow: '0 0 10px rgba(255,255,255,0.5)',
            }}
          >
            {letter}
          </Typography>
        ))}
      </Box>

      {/* Reflexo inferior */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(0deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Linha central de foco */}
     
    </Box>
  );
};

export default LetterSlotMachine;