import io from 'socket.io-client';

// URL des Socket Servers
const SOCKET_SERVER_URL = 'http://localhost:5000';

console.log('Starte Socket Client...');

// Starte VERBINDUNG zu Socket Server
const socket = io(SOCKET_SERVER_URL);

socket.on('connect', () => {
  console.log('Verbunden mit Socket Server, Socket ID:', socket.id);

  // wenn server das Event "welcome" an mich sendet, fange es hier ab!
  socket.on('welcome', (message) => {
    console.log('Nachricht vom Server erhalten:', message);
  });
});