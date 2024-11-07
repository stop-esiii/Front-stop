import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import {getItem, setItem} from './StorageService';

const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [roomCode, setRoomCode] = useState('');
  const [themes, setThemes] = useState([]);
  const [gameInfo,setGameInfo] = useState({})
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Inicializar a conexão com o WebSocket
    const socketInstance = io('https://stop-backend.up.railway.app');

    // Guardar a instância do socket
    setSocket(socketInstance);

    // Eventos de WebSocket
    socketInstance.on('connect', () => {
      setIsConnected(true);
      console.log('Conectado ao WebSocket');
    });

    socketInstance.on('disconnect', () => {
      setIsConnected(false);
      console.log('Desconectado do WebSocket');
    });

    socketInstance.on('create_lobby', (data) => {
      console.log('Código da sala recebido:', data.msg);
      setRoomCode(data.msg); // Atualizar o estado do roomCode
      setThemes(data.themes)
      console.log(data)
    });

    socketInstance.on('enter_lobby', (data) => {
       setPlayers(  prevPlayers => [...prevPlayers, data.playerName])

    });

    // Função de limpeza (disconnect) ao desmontar
    return () => {
      socketInstance.disconnect();
      console.log('WebSocket desconectado');
    };
  }, [url]);

  // Função para enviar dados via WebSocket
  const sendMessage = (event, data) => {
    if (socket) {
      socket.emit(event, data);
    }
  };

  const handleCreateRoom = (event,data) => {
    debugger
    if (socket) {
        setItem('gameInfo', JSON.stringify(
            {
                "time": data.time,
                "rounds": data.rounds,
                "max_members": data.max_members,
                "number_members": data.number_members,
                "themes": data.themes
            }));
        socket.emit(event, data);
    }
};

  const handleEnterRoom = (event,data) => {
    const gameInfo = []
      console.log(getItem('gameInfo'))
    if (socket && event == 'enter_lobby') {
    gameInfo.push( JSON.stringify(
            {
                "time": data.time,
                "rounds": data.rounds,
                "max_members": data.max_members,
                "number_members": data.number_members,
                "themes": data.themes
            }))
        setItem('gameInfo', JSON.stringify(gameInfo));
        socket.emit(event, data);
    }
  };

  // Retornar o socket e outras informações para reutilização
  return { socket, players, isConnected, roomCode,themes,sendMessage,handleCreateRoom,handleEnterRoom };
};

export default useWebSocket;
