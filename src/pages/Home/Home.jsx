import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import Button from '@mui/material/Button';
import './Home.css';
import ModalGenenric from '../../shared/components/ModalGeneric/ModalGeneric';

function Home() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="home-container">
      <div className="logo">
        <img src={logo} alt="Stop Logo" className="logo-image" />
      </div>
      <div className="menu">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/login')}
          sx={{ marginBottom: '20px' }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ marginBottom: '20px' }}
        >
          Ajuda
        </Button>
      </div>
      <ModalGenenric
        open={open}
        handleClose={handleClose}
        title="Como Jogar?"
        children={
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at fermentum dui.
            </p>
            <h3 style={{ color: '#ffc94d', textAlign: 'center' }}>Conta Premium</h3>
            <p>
              Nam non congue sapien. In congue convallis nisi, non tempus felis bibendum in.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default Home;
