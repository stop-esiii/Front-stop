import { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Mover a criação do socket para fora do hook para garantir uma única instância
const socket = io('wss://stop-backend.up.railway.app', { autoConnect: false });

const WebSocket2 = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [roomCode, setRoomCode] = useState('');
  const [themes, setThemes] = useState([]);
  const [roundTime,setRoundTime]=useState(0)
  const [gameInfo, setGameInfo] = useState({});
  const [isInLobby, setLobby] = useState(false);

  useEffect(() => {
    // Conectar o socket apenas se não estiver conectado
    if (!socket.connected) {
      socket.connect();
    }

    // Eventos de WebSocket
    const handleConnect = () => {
      setIsConnected(true);
      console.log('Conectado ao WebSocket');
    };

    const handleDisconnect = () => {
      setIsConnected(false);
      console.log('Desconectado do WebSocket');
    };

    const handleCreateLobby = (data) => {
      console.log('Código da sala recebido:', data.letters);
      setRoomCode(data.code_lobby);
      setThemes(data.themes);
      let userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
      userInfo.host = true;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    };

    const handleEnterLobby = (data) => {
      console.log('Usuário entrou na sala:', data.letters, data.number_members, data.themes);
      setLobby(true);
      setRoundTime(parseInt(data.time))
      localStorage.setItem('gameInfo', JSON.stringify({
        "time": data.time,
        "rounds": data.rounds,
        "max_members": data.max_members,
        "number_members": data.number_members,
        "themes": data.themes,
        "users": data.users,
        "letters":data.letters
      }));
    };

    // Registrar os eventos
    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('create_lobby', handleCreateLobby);
    socket.on('enter_lobby', handleEnterLobby);

    // Limpeza dos eventos ao desmontar
    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('create_lobby', handleCreateLobby);
      socket.off('enter_lobby', handleEnterLobby);
    };
  }, []);

  // Função para enviar dados via WebSocket
  const sendMessage = (event, data) => {
    if (socket) {
      socket.emit(event, data);
    }
  };

  const handleCreateRoom = (event, data) => {
    if (socket) {
      socket.emit(event, data);
    }
  };

  const handleEnterRoom = (event, data) => {
    if (socket) {
      socket.emit(event, data);
    }
  };

  // Retornar o socket e outras informações para reutilização
  return { socket, isConnected, roomCode,themes,sendMessage,handleCreateRoom,handleEnterRoom ,setIsConnected,roundTime};
};

export default WebSocket2;
