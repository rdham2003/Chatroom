const http = require('http');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
    // Handle HTTP requests (if needed)
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New connection to server');

    ws.on('message', (message) => {
        // Broadcast message to all clients
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Handle client disconnect
    ws.on('close', () => {
        console.log('Client disconnected');
        // You can broadcast a message that a user has left here if needed
    });
});

server.listen(5173, () => {
    console.log('Server is running on port 5173');
});
