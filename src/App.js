// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation  } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/home/home.jsx';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import GameOptions from './pages/GameOptions/GameOptions';
import DrawLetter from './pages/DrawLetter/DrawLetter';
import GameScreen from './pages/GameScreen/GameScreen';
import StopScreen from './pages/StopScreen/StopScreen';
import ValidationScreen from './pages/ValidationScreen/ValidationScreen';
import WaitingRoom from './pages/WaintingRoom/WaintigRoom'; // Importar a nova página
import UseAnimationToggle from './animations/animation.jsx';
const theme = createTheme({
  palette: {
    primary: {
      main: '#084080',
    },
    secondary: {
      main: '#041931',
    },
  },
});


function App() {
  return (
      <Router>
          <MainContent />
      </Router>
  );
}


function MainContent() {
  const location = useLocation();

  // Define a rota em que você não quer mostrar a animação
  const hideAnimationOnRoutes = ['/special'];

  return (
      <ThemeProvider theme={theme}>
        {!hideAnimationOnRoutes.includes(location.pathname) && <UseAnimationToggle />}
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/game-options" element={<GameOptions />} />
              <Route path="/draw-letter" element={<DrawLetter />} />
              <Route path="/game-screen" element={<GameScreen />} />
              <Route path="/stop" element={<StopScreen />} />
              <Route path="/validation" element={<ValidationScreen />} />
              <Route path="/waiting-room" element={<WaitingRoom />} /> {/* Nova rota */}
            </Routes>
          </div>
      </ThemeProvider>
  );
}

export default App;
