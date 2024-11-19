import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
// Mover a criação do socket para fora do hook para garantir uma única instância
const socket = io('wss://stop-backend.up.railway.app', { autoConnect: false });

const WebSocket2 = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
  const [themes, setThemes] = useState([]);
  const [roundTime, setRoundTime] = useState(0)
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
      console.log(data.code_lobby)
      setRoomCode(data.code_lobby);
      setThemes(data.themes);
      let userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
      userInfo.host = true;
      userInfo.roomCode = data.code_lobby
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
        "letters": data.letters
      }));
    };

    const handleValidate=(data)=>{
      console.log("ENVIADO PARA VALIDAÇÂO")
    }

    const handleValidatedResultsStop = (data) => {
      // Obter os dados existentes do localStorage
      // let gameInfo = JSON.parse(localStorage.getItem("gameInfo")) || {};
  
      // // Criar um novo objeto com o operador de espalhamento
      // gameInfo = { ...gameInfo, validate_responses: data };
  
      // // Log dos dados recebidos para depuração
      // console.log(data);
  
      // // Atualizar o localStorage com os dados modificados
      // localStorage.setItem("gameInfo", JSON.stringify(gameInfo));
  };
  
    const handleResultsStop=(data)=>{
        console.log(data.result)
        console.log(data)
        let gameInfo = JSON.parse(localStorage.getItem("gameInfo")) || {};
        gameInfo.results = data.result;
        localStorage.setItem("gameInfo", JSON.stringify(gameInfo));
    }

    // Registrar os eventos
    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('create_lobby', handleCreateLobby);
    socket.on('enter_lobby', handleEnterLobby);
    socket.on('trigger_stop', handleTriggerStop);
    socket.on('receive_stop', handleReceiveStop);
    socket.on('return_stop',handleResultsStop);
    socket.on('validate_responses',handleValidate);
    // socket.on('retrieve_validate_responses',handleValidatedResultsStop);
    // Limpeza dos eventos ao desmontar
    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('create_lobby', handleCreateLobby);
      socket.off('enter_lobby', handleEnterLobby);
      socket.off('trigger_stop', handleTriggerStop);
      socket.off('receive_stop', handleReceiveStop);
      socket.off('return_stop',handleResultsStop);
      socket.off('validate_responses',handleValidate);
      // socket.off('retrieve_validate_responses',handleValidatedResultsStop);
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

  const validateStop = (event, data) => {
    console.log(data)
    if (socket) {
      socket.emit(event, data);
    }
  };

  const handleValidatedResults=async(event)=>{
    if (socket) {
      socket.emit(event)
    }
  }

  const handleReturnStop = async (event, data) => {
    if (socket) {
      try {
        const response = await new Promise((resolve, reject) => {
          socket.emit(event, data, (res) => {
            setTimeout(() => navigate('/results'), 2300); // Abre ValidationModal após um atraso pequeno  
           
          });
        });
  
        // Navega para '/results' após sucesso
      } catch (error) {
        console.error('Erro no evento:', error);
      }
    }
  };
  

  const handleEnterRoom = (event, data) => {
    if (socket) {
      socket.emit(event, data);
    }
  };

 
  const handleTriggerStop = (event, data) => { 
     if (socket) {
      socket.emit(event, data);
      console.log('TESTE')
    }
  }
  
  const handleReceiveStop = (event, data) =>{
    console.log(data)
    if (socket) {
     socket.emit(event, data);
   }
 }

  // Retornar o socket e outras informações para reutilização
  return { socket, isConnected, roomCode, themes, sendMessage, validateStop,handleReturnStop,handleCreateRoom, handleReceiveStop,handleEnterRoom, handleTriggerStop,setIsConnected, handleValidatedResults,roundTime };
};

export default WebSocket2;
