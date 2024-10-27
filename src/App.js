// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import GameOptions from './pages/GameOptions/GameOptions';
import DrawLetter from './pages/DrawLetter/DrawLetter';
import GameScreen from './pages/GameScreen/GameScreen';
import StopScreen from './pages/StopScreen/StopScreen';
import ValidationScreen from './pages/ValidationScreen/ValidationScreen'; // Importar a nova página
import { getItem } from './services/StorageService';

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
  function PrivateRoute({ children }) {
    const token = getItem('userInfo');
    return token ? children : <Navigate to="/" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rotas protegidas */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/game-options"
              element={
                <PrivateRoute>
                  <GameOptions />
                </PrivateRoute>
              }
            />
            <Route
              path="/draw-letter"
              element={
                <PrivateRoute>
                  <DrawLetter />
                </PrivateRoute>
              }
            />
            <Route
              path="/game-screen"
              element={
                <PrivateRoute>
                  <GameScreen />
                </PrivateRoute>
              }
            />
            <Route
              path="/stop"
              element={
                <PrivateRoute>
                  <StopScreen />
                </PrivateRoute>
              }
            />
            <Route
              path="/validation"
              element={
                <PrivateRoute>
                  <ValidationScreen />
                </PrivateRoute>
              }
            />

            {/* Redirecionar rotas inválidas */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;