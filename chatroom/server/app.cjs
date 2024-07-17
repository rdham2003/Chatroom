const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Welcome to the chatroom mf");
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection to server');
});

server.listen(5173)

console.log('Listening on port 5173')