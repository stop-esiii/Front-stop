// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Não importamos mais o Router aqui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f74440',
    },
    secondary: {
      main: '#ffc94d',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
