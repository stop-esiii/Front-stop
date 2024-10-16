import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Substitua pela URL do seu servidor

// Função para entrar no lobby
const enterLobby = (code_lobby, id_user) => {
    socket.emit('enter_lobby', { code_lobby, id_user }, (response) => {
        if (response.status === false) {
            console.error(response.msg);
        } else {
            console.log('Lobby data:', response);
        }
    });
};

// Função para sair do lobby
const leaveLobby = (code_lobby, id_user) => {
    socket.emit('leave_lobby', { code_lobby, id_user }, (response) => {
        if (response.status === false) {
            console.error(response.msg);
        } else {
            console.log(response.msg);
        }
    });
};

// Evento de desconexão
socket.on('disconnect_lobby', (data) => {
    console.log(data.msg);
});