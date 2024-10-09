// src/App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import GameOptions from './pages/GameOptions/GameOptions';

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
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/game-options" element={<GameOptions/>}/> {/* Nova rota */}
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
