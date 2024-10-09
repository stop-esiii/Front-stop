import React, {useState, useEffect} from 'react';
import {Box, Button, Typography, IconButton,Chip} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import io from 'socket.io-client';
import { LogoutOutlined } from '@mui/icons-material';
import { logOut} from '../../services/Requests.js';
import ModalGenenric from '../../shared/components/ModalGeneric/ModalGeneric.jsx';
import GameOptionsModal from "./CreateGameModal.jsx"
import EnterGameModal from './EnterGameModal.jsx';
import WaitingPlayersModal from "./WaitingPlayersModal.jsx"
import useWebSocket from "../../services/WebSocket.js"

function Profile() {
    const { isConnected, roomCode,handleCreateRoom,themes } = useWebSocket('http://localhost:5000');
 
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false);
  

    const [userinfo,setUserInfo] = useState({});
   
    useEffect(() => {
        const userCache = JSON.parse(localStorage.getItem('userInfo'));

        if (userCache && userCache.token) {
            console.log("Token encontrado");
            setUserInfo(userCache)
        } else {
            navigate("/");
        }
        
    }, []);
    


    const handleCloseModal = () => {
        setModalOpen(!isModalOpen);  // Fecha o modal
    };


    const handleCloseModal2 = () => {
        setModalOpen2(!isModalOpen2);  // Fecha o modal
    };
 
    const openCreateGame=()=>{
        setModalOpen(true)
    }
 

    const logOutUser = async (token) => {
        if (token===null) {
            navigate("/");
            
        } 
        await logOut(token);
        localStorage.removeItem('userInfo')
        navigate("/");
    };

    const handleJoinRoom = () => {
        setModalOpen2(true)
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
                {/* Ícone de ajuda */}
                <IconButton
                    onClick={() => console.log('Ajuda clicada')}
                    
                    sx={{position: 'absolute', top: 16, right: 80, color: '#f74440'}}
                >
                    <HelpIcon/>
                </IconButton>

                {/* Ícone de configurações */}
                <IconButton
                    onClick={() => console.log('Configurações clicadas')}
                    sx={{position: 'absolute', top: 16, right: 40, color: '#f74440'}}
                >
                    <SettingsIcon/>
                </IconButton>

                <IconButton
                    onClick={() => logOutUser(userinfo.token)}
                    sx={{position: 'absolute', top: 16, left: 40, color: '#f74440'}}
                >
                    <LogoutOutlined/>
                </IconButton>

                {/* Boas-vindas ao usuário */}
                <Typography
                    sx={{textAlign: 'center', color: '#f74440', fontWeight: 'bold', fontSize: '20px', marginBottom: 2}}>
                    Olá, {userinfo.username}
                </Typography>

                {/* Avatar */}
                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        // backgroundColor: '#f74440',
                        borderRadius: '50%',
                        margin: '0 auto',
                        marginBottom: 2,
                        backgroundImage:`url(${userinfo.image})`,
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                    }}
                >
                    {/* Aqui pode adicionar a imagem do avatar do usuário */}
                </Box>

                {/* Status da Conta */}
                <Typography sx={{textAlign: 'center', color: '#000', fontWeight: 'bold', marginBottom: 2}}>
                    Conta Free <br/>
                    <Typography sx={{color: '#f74440'}}>Seja Premium.</Typography>
                </Typography>

                {/* Botões de ações */}
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#f74440',
                        color: '#fff',
                        fontWeight: 'bold',
                        marginBottom: 2,
                    }}
                    onClick={() => openCreateGame()}
                >
                    CRIAR PARTIDA
                </Button>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#f74440',
                        color: '#fff',
                        fontWeight: 'bold',
                    }}
                    onClick={handleJoinRoom}
                >
                    ENTRAR EM PARTIDA
                </Button>
                

            <GameOptionsModal open={isModalOpen} onClose={handleCloseModal}  handleCreateGame={handleCreateRoom} roomCode={roomCode} game_themes={themes}/>
            <EnterGameModal open={isModalOpen2} onClose={handleCloseModal2}></EnterGameModal>
            </Box>

        </Box>
        
    );
}

export default Profile;