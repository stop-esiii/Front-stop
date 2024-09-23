// src/pages/Login/Login.js
import React, { useState } from 'react';
import { TextField, Button, Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import {login_auth} from '../../services/Service'

function Login() {
  const navigate = useNavigate();
  const [login, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');

  const handleLogin = async() => {
    try {
      const credentials = {login, password}
      const data = await login_auth(credentials);
      console.log('Login bem sucessedido', data);
      
    } catch (error) {
      setError("Erro ao fazer login, verifique suas credenciais.")
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f74440',
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 3,
          borderRadius: 4,
          backgroundColor: '#ffc94d',
          position: 'relative',
          border: '10px solid #f74440',
          clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
        }}
      >
        <Box sx={{ textAlign: 'center', color: '#f74440', fontWeight: 'bold', fontSize: '24px', marginBottom: 2 }}>
          LOGIN
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#fff',
            color: '#f74440',
            marginBottom: 2,
            fontWeight: 'bold',
          }}
        >
          FAZER LOGIN COM GOOGLE
        </Button>

        <Divider sx={{ marginBottom: 2 }}>
          <Box sx={{ fontWeight: 'bold', color: '#f74440' }}>OU</Box>
        </Divider>

        <TextField
          label="login"
          placeholder="Insira seu e-mail aqui."
          value= {login}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="dense"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="password"
          type="password"
          value= {password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Insira sua senha aqui."
          fullWidth
          margin="dense"
          sx={{ marginBottom: 2 }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            backgroundColor: '#f74440',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: 2,
          }}
        >
          ENTRAR
        </Button>

        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <p>
            Não possui login?{' '}
            <Button
              variant="text"
              sx={{ color: '#f74440', fontWeight: 'bold' }}
              onClick={() => navigate('/register')}
            >
              Cadastre-se
            </Button>
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
