import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './home.css'; 

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
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: '20px', 
            backgroundColor: '#f74440', 
            padding: '20px',
            width: '400px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', 
            border: '10px solid #f74440', 
            clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)' 
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', color: '#ffc94d', fontWeight: 'bold', fontSize: '24px' }}>
          Como Jogar?
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: '#f74440' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ color: 'white' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at fermentum dui. Ut pretium elit ac enim tempus dictum eu quis metus.
            Nam non congue sapien. In congue convallis nisi, non tempus felis
            bibendum in.
          </p>
          <h3 style={{color: '#ffc94d', textAlign:'center'}}>Conta Premium</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at fermentum dui. Ut pretium elit ac enim tempus dictum eu quis metus.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Home;
