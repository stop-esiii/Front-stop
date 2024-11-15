import React, { useState,useRef,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Station_clock.png';
import Button from '@mui/material/Button';
import './Home.css';
import ModalGenenric from '../../shared/components/ModalGeneric/ModalGeneric';
import UseAnimationToggle from '../../animations/animation.jsx'
function Home() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    
    <div className="home-container">
      
     
     
      
       {/* <div
    className="road"
   /> */}
     
   
   
 
      <div className="logo">
        <img src={logo} alt="Stop Logo" className="logo-image" />
      </div>

     
      
      <div className="menu">
      <Button
        variant="contained"
        onClick= {() => navigate('/login')}
        sx={{
          marginBottom: '20px',
          fontWeight: "bolder",
          fontSize: "20px",
          backgroundColor: "#201E1D",
          borderRadius: "30px",
          width: "120px",
          height: "50px",
          '&:hover': {
            backgroundColor: "#333", // Cor de fundo quando o botão é sobrevoado
            transform: "scale(1.05)", // Efeito de aumento ao passar o mouse
          },
        }}
      >Login</Button>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            marginBottom: '20px',
            fontWeight: "bolder",
            fontSize: "20px",
            backgroundColor: "#201E1D",
            borderRadius: "30px",
            width: "120px",
            height: "50px",
            '&:hover': {
              backgroundColor: "#333", // Cor de fundo quando o botão é sobrevoado
              transform: "scale(1.05)", // Efeito de aumento ao passar o mouse
            },
          }}
        >
          Ajuda
        </Button>
      </div>
      <ModalGenenric
        open={open}
        handleClose={handleClose}
        backEnabled={false}
        title="Como Jogar?"
        
        children={
          <div>
            <p>
            - Os jogadores terão a missão de pensar e escrever palavras de diversas temas, com uma letra sorteada em cada rodada.<br />
            - O primeiro que escrever tudo e clicar em “stop” irá parar a rodada.<br />
            - Se uma palavras não for repetida, vale 10 pontos, caso contrário vale 5<br />
            <b>O Vencedor é o jogador que TIVER MAIS PONTOS AO FINAL DO JOGO.</b>
            </p>
            <h3 style={{ color: '#ffc94d', textAlign: 'center' }}>Conta Premium</h3>
            <p>
            Pelo valor fixo de R$ 10,00, tenha acesso a conta premium e garanta benefícios dentro de nosso jogo como poderes exclusivos.
            </p>
          </div>
        }
      />
    
    </div>
  );
}

export default Home;