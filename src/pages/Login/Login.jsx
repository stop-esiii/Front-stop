import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close'; // Ícone para fechar o popup
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false); // Estado para controlar o Dialog
  const [forgotEmail, setForgotEmail] = useState(''); // Estado para o e-mail de recuperação
  const [showChangePassword, setShowChangePassword] = useState(false); // Estado para alternar entre telas
  const [newPassword, setNewPassword] = useState(''); // Estado para nova senha
  const [confirmPassword, setConfirmPassword] = useState(''); // Estado para confirmar a nova senha
  const [forgotPasswordError, setForgotPasswordError] = useState(''); // Estado para erros no esqueci a senha
  const [passwordError, setPasswordError] = useState(''); // Estado para erros de senha

  const handleLogin = async () => {
    try {
      const credentials = { email, password };
      console.log('Login bem-sucedido:', credentials);
      // Simulação de login bem-sucedido
      if (credentials.email && credentials.password) {
        navigate('/profile'); // Redirecionar para o perfil após login bem-sucedido
      }
    } catch (error) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  const handleForgotPassword = () => {
    setOpen(true); // Abrir o Dialog
    setShowChangePassword(false); // Inicialmente mostrar recuperação de senha
  };

  const handleClose = () => {
    setOpen(false); // Fechar o Dialog
    setForgotPasswordError('');
    setPasswordError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendRecoveryEmail = () => {
    if (!forgotEmail) {
      setForgotPasswordError('O e-mail é obrigatório.');
    } else if (!validateEmail(forgotEmail)) {
      setForgotPasswordError('Por favor, insira um e-mail válido.');
    } else {
      console.log('Enviar e-mail de recuperação para:', forgotEmail);
      setShowChangePassword(true); // Mostra a tela de alteração de senha
      setForgotPasswordError('');
    }
  };

  const handlePasswordChange = () => {
    if (!newPassword || !confirmPassword) {
      setPasswordError('Ambos os campos de senha são obrigatórios.');
    } else if (newPassword !== confirmPassword) {
      setPasswordError('As senhas não coincidem.');
    } else {
      console.log('Senha alterada para:', newPassword);
      setPasswordError('');
      setOpen(false); // Fechar o Dialog após alterar a senha
      navigate('/profile'); // Redirecionar para o perfil após alterar a senha
    }
  };

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
          clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
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
          label="E-mail"
          placeholder="Insira seu e-mail aqui."
          fullWidth
          margin="dense"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Senha"
          type="password"
          placeholder="Insira sua senha aqui."
          fullWidth
          margin="dense"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

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

        <Button
          variant="text"
          fullWidth
          onClick={handleForgotPassword}
          sx={{
            color: '#f74440',
            fontWeight: 'bold',
            fontSize: '14px',
            marginTop: 2,
          }}
        >
          Esqueceu a senha?
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

      {/* Dialog para recuperação de senha */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: '20px',
            backgroundColor: '#ffc94d',
            border: '10px solid #f74440',
            width: '300px',
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', color: '#f74440', fontWeight: 'bold', fontSize: '20px', position: 'relative' }}>
          {showChangePassword ? 'ALTERAR SENHA' : 'RECUPERAR SENHA'}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: '#f74440' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ textAlign: 'center', color: '#f74440' }}>
          {showChangePassword ? (
            // Tela de alteração de senha
            <>
              <TextField
                label="Nova Senha"
                type="password"
                placeholder="Insira sua nova senha aqui."
                fullWidth
                margin="dense"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ backgroundColor: '#fff', borderRadius: 1, marginBottom: 2 }}
              />
              <TextField
                label="Confirmar Senha"
                type="password"
                placeholder="Confirme sua nova senha aqui."
                fullWidth
                margin="dense"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{ backgroundColor: '#fff', borderRadius: 1, marginBottom: 2 }}
              />
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </>
          ) : (
            // Tela de recuperação de senha
            <>
              <DialogContentText sx={{ color: '#f74440' }}>
                Insira seu e-mail para enviarmos um link de recuperação de sua senha.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                placeholder="Insira seu e-mail aqui."
                type="email"
                fullWidth
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                sx={{ backgroundColor: '#fff', borderRadius: 1, marginTop: 2 }}
              />
              {forgotPasswordError && <p style={{ color: 'red' }}>{forgotPasswordError}</p>}
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          {showChangePassword ? (
            <Button
              onClick={handlePasswordChange}
              sx={{
                backgroundColor: '#f74440',
                color: '#fff',
                fontWeight: 'bold',
                width: '100%',
              }}
            >
              ALTERAR SENHA
            </Button>
          ) : (
            <Button
              onClick={handleSendRecoveryEmail}
              sx={{
                backgroundColor: '#f74440',
                color: '#fff',
                fontWeight: 'bold',
                width: '100%',
              }}
            >
              ENVIAR LINK
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Login;
