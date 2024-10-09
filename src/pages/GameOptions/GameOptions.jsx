// src/pages/GameOptions/GameOptions.jsx
import React from 'react';
import {Box, Button, Typography, TextField, IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GameOptions() {
    const navigate = useNavigate();

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
                {/* Botão para voltar */}
                <IconButton
                    onClick={() => navigate('/profile')}
                    sx={{position: 'absolute', top: 8, left: 8, color: '#f74440'}}
                >
                    <ArrowBackIcon/>
                </IconButton>

                <Typography
                    sx={{textAlign: 'center', color: '#f74440', fontWeight: 'bold', fontSize: '20px', marginBottom: 2}}>
                    OPÇÕES DE PARTIDA
                </Typography>

                {/* Opções de Tempo */}
                <Typography sx={{color: '#f74440', fontWeight: 'bold', marginBottom: 1}}>TEMPO:</Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: 2}}>
                    <Button variant="contained" sx={{backgroundColor: '#f74440', color: '#fff'}}>1MIN</Button>
                    <Button variant="contained" sx={{backgroundColor: '#ffc94d', color: '#f74440'}}>1:30MIN</Button>
                </Box>

                {/* Rodadas */}
                <Typography sx={{color: '#f74440', fontWeight: 'bold', marginBottom: 1}}>RODADAS:</Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: 2}}>
                    <Button variant="contained" sx={{backgroundColor: '#f74440', color: '#fff'}}>5</Button>
                    <Button variant="contained" sx={{backgroundColor: '#ffc94d', color: '#f74440'}}>10</Button>
                </Box>

                {/* Número de Jogadores */}
                <Typography sx={{color: '#f74440', fontWeight: 'bold', marginBottom: 1}}>NÚMERO DE
                    JOGADORES:</Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: 2}}>
                    <Button variant="contained" sx={{backgroundColor: '#f74440', color: '#fff'}}>5</Button>
                    <Button variant="contained" sx={{backgroundColor: '#ffc94d', color: '#f74440'}}>10</Button>
                </Box>

                {/* Temas */}
                <Typography sx={{color: '#f74440', fontWeight: 'bold', marginBottom: 1}}>TEMAS:</Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: 2}}>
                    <Button variant="contained" sx={{backgroundColor: '#f74440', color: '#fff'}}>CEP</Button>
                    <Button variant="contained" sx={{backgroundColor: '#ffc94d', color: '#f74440'}}>FRUTA</Button>
                </Box>

                {/* Input para novos temas */}
                <TextField
                    placeholder="Insira o tema aqui."
                    fullWidth
                    sx={{backgroundColor: '#fff', borderRadius: 1, marginBottom: 2}}
                />

                {/* Botão para criar partida */}
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#f74440',
                        color: '#fff',
                        fontWeight: 'bold',
                        marginTop: 2,
                    }}
                >
                    CRIAR
                </Button>

                <Typography sx={{textAlign: 'center', color: '#f74440', marginTop: 2}}>
                    CONTA FREE <br/>
                    <Typography sx={{color: '#f74440'}}>Seja Premium para criar partidas de forma
                        ilimitada.</Typography>
                </Typography>
            </Box>
        </Box>
    );
}

export default GameOptions;
