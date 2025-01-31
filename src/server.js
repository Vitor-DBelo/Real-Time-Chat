import * as http from 'http';
import { WebSocketServer } from 'ws';
import handleHttpRequest from './routs/routs.js'; // Suponho que o arquivo de rotas esteja correto
import handleWebSocketConnection from './websocket/websocket.js';

const port = process.env.PORT || 8080;

const server = http.createServer(handleHttpRequest);

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => handleWebSocketConnection(ws, wss));

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
