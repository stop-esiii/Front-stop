import React, {useState, useEffect} from 'react';
import {Box, Button, Typography, IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import io from 'socket.io-client';

function Profile() {
    const navigate = useNavigate();
    const userName = "Nome do Usuário";
    const [roomCode, setRoomCode] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socket = io('wss://stop-backend.up.railway.app', {
            transports: ['websocket'],
        });

        setSocket(socket);

        socket.on('connect', () => {
            console.log('Conectado ao WebSocket');
        });

        socket.on('connect_error', (err) => {
            console.error('Erro de conexão:', err);
        });

        socket.on('disconnect', () => {
            console.log('Desconectado do WebSocket');
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const handleEnterLobby = () => {
        if (socket) {
            socket.emit('enter_lobby', {code_lobby: 'lobby123', id_user: 1}, (response) => {
                if (response.status === false) {
                    console.error(response.msg);
                } else {
                    console.log('Lobby data:', response);
                    navigate('/game-options'); // Redireciona para a página de opções do jogo
                }
            });
        }
    };

    const handleLeaveLobby = () => {
        if (socket) {
            socket.emit('leave_lobby', {code_lobby: 'lobby123', id_user: 1}, (response) => {
                if (response.status === false) {
                    console.error(response.msg);
                } else {
                    console.log(response.msg);
                }
            });
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
                <IconButton
                    onClick={() => console.log('Ajuda clicada')}
                    sx={{position: 'absolute', top: 8, right: 48, color: '#f74440'}}
                >
                    <HelpIcon/>
                </IconButton>

                <IconButton
                    onClick={() => console.log('Configurações clicadas')}
                    sx={{position: 'absolute', top: 8, right: 8, color: '#f74440'}}
                >
                    <SettingsIcon/>
                </IconButton>

                <Typography
                    sx={{textAlign: 'center', color: '#f74440', fontWeight: 'bold', fontSize: '20px', marginBottom: 2}}
                >
                    Olá, {userName}
                </Typography>

                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#f74440',
                        borderRadius: '50%',
                        margin: '0 auto',
                        marginBottom: 2,
                    }}
                >
                </Box>

                <Typography sx={{textAlign: 'center', color: '#000', fontWeight: 'bold', marginBottom: 2}}>
                    Conta Free <br/>
                    <Typography sx={{color: '#f74440'}}>Seja Premium.</Typography>
                </Typography>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#f74440',
                        color: '#fff',
                        fontWeight: 'bold',
                        marginBottom: 2,
                    }}
                    onClick={handleEnterLobby}
                >
                    ENTRAR EM PARTIDA
                </Button>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#f74440',
                        color: '#fff',
                        fontWeight: 'bold',
                    }}
                    onClick={handleLeaveLobby}
                >
                    SAIR DA PARTIDA
                </Button>
                {roomCode && (
                    <Typography sx={{textAlign: 'center', color: '#f74440', fontWeight: 'bold', marginTop: 2}}>
                        {roomCode}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default Profile;