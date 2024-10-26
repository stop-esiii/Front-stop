import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const themesList = [
  // Lista de temas fornecida por você
  "Frutas", "Animais", "Cores", "CEP (Cidades, Estados e Países)", "Filmes", "Nomes próprios", "Profissões", "Objetos",
  "Flores", "Times de futebol", "Marcas", "Personagens fictícios", "Comidas", "Atores/Actrizes", "Cantores/Bandas",
  "Celebridades", "Adjetivos", "Programas de TV", "Doenças", "Hobbies", "Super-heróis", "Instrumentos musicais", "Carros",
  "Rios", "Línguas", "Esportes", "Partes do corpo", "Bebidas", "Plantas", "Tecnologia"
];

function GameScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60); // Tempo em segundos

  // Pegar a letra passada da rota anterior
  const letter = location.state?.letter || "A";

  // Selecionar 8 temas aleatórios da lista
  useEffect(() => {
    const shuffledThemes = [...themesList].sort(() => 0.5 - Math.random());
    setSelectedThemes(shuffledThemes.slice(0, 8));
  }, []);

  // Contagem regressiva do tempo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          navigate('/stop'); // Redirecionar para a tela "Stop" quando o tempo acabar
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Limpar o intervalo quando o componente for desmontado
  }, [navigate]);

  const handleStop = () => {
    // Lógica para parar o jogo e processar os resultados
    console.log("Jogo parado");
    navigate("/stop"); // Redirecionar para a tela "Stop" ao clicar no botão STOP
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffc94d',
        flexDirection: 'column',
      }}
    >
      <Typography sx={{ fontWeight: 'bold', fontSize: '24px', color: '#f74440', marginBottom: 2 }}>
        LETRA: {letter}
      </Typography>

      <Box
        sx={{
          width: 400,
          padding: 3,
          borderRadius: 4,
          backgroundColor: '#f74440',
          border: '10px solid #f74440',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          textAlign: 'center',
          clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
        }}
      >
        {selectedThemes.map((theme, index) => (
          <Box key={index}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#ffc94d' }}>{theme}</Typography>
            <TextField
              placeholder={`Escreva aqui...`}
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: '#fff', borderRadius: 1, marginBottom: 2 }}
            />
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 400, marginTop: 2 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#f74440' }}>
          0 PONTOS {/* Aqui você pode calcular os pontos do jogador */}
        </Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: '16px', color: '#f74440' }}>
          TEMPO: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={handleStop}
        sx={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: '#ccc',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '18px',
          marginTop: 2,
        }}
      >
        STOP
      </Button>
    </Box>
  );
}

export default GameScreen;
