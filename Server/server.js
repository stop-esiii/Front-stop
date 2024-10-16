const io = require('socket.io')(server);

const lobbies = {}; // Estrutura para armazenar os lobbies

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('enter_lobby', (data, callback) => {
        const { code_lobby, id_user } = data;
        const lobby = lobbies[code_lobby];

        if (!lobby) {
            return callback({ status: false, msg: 'Lobby not found.' });
        }

        if (lobby.members.length >= lobby.max_members) {
            return callback({ status: false, msg: 'Lobby is full.' });
        }

        lobby.members.push(id_user);
        callback({
            time: lobby.time,
            rounds: lobby.rounds,
            max_members: lobby.max_members,
            number_members: lobby.members.length,
            themes: lobby.themes,
        });
    });

    socket.on('leave_lobby', (data, callback) => {
        const { code_lobby, id_user } = data;
        const lobby = lobbies[code_lobby];

        if (lobby) {
            lobby.members = lobby.members.filter(member => member !== id_user);
            callback({ msg: 'User has left the lobby.' });
        } else {
            callback({ status: false, msg: 'Lobby not found.' });
        }
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
        socket.broadcast.emit('disconnect_lobby', { msg: 'A user has disconnected.' });
    });
});