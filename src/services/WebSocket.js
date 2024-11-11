import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [roomCode, setRoomCode] = useState('');
  const [themes, setThemes] = useState([]);
  const [gameInfo,setGameInfo] = useState({})

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
      // console.log('Código da sala recebido:', data.msg);
      setRoomCode(data.msg);
      setThemes(data.themes);
      localStorage.setItem('gameInfo', JSON.stringify(
        {
          "time": data.time,
          "rounds": data.rounds,
          "max_members": data.max_members,
          "number_members": data.number_members,
          "themes": data.themes,
          "users": data.users
      }
     
    ));
    setGameInfo(prevGameInfo => ({
      ...prevGameInfo,
      users: data.users
    }));
      console.log(data)
    });
    

    socketInstance.on('enter_lobby', (data) => {
      debugger
      console.log('Usuario entrou na sala:', data.time);
      console.log('Usuario entrou na sala:', data.number_members);
      console.log('Usuario entrou na sala:', data.themes);
      console.log(data)
      alert(data)
      localStorage.setItem('gameInfo', JSON.stringify(
          {
            "time": data.time,
            "rounds": data.rounds,
            "max_members": data.max_members,
            "number_members": data.number_members,
            "themes": data.themes,
            "users": data.users
        }
      ));
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
    if (socket) {
        socket.emit(event, data);
    }
};

  const handleEnterRoom = (event,data) => {
    if (socket) {
        socket.emit(event, data);
    }
  };

  // Retornar o socket e outras informações para reutilização
  return { socket, isConnected, roomCode,themes,sendMessage,handleCreateRoom,handleEnterRoom };
};

export default useWebSocket;