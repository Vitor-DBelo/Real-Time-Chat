import WebSocket from 'ws';

const handleWebSocketConnection = (ws, wss) => {
    console.log('Novo cliente conectado.');

    ws.on('message', (message) => {
        console.log('Mensagem recebida:', message.toString());
        
      
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {  
                client.send(message.toString());
            }
        });
    });

    ws.on('close', () => {
        console.log('Cliente desconectado.');
    });

    ws.on('error', (err) => {
        console.error('Erro no WebSocket:', err);
    });
};

export default handleWebSocketConnection;
