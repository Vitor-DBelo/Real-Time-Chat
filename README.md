# Real-time Chat com WebSocket

Uma aplicação de chat em tempo real construída com Node.js e WebSocket, permitindo comunicação instantânea entre múltiplos usuários.

![Interface do Chat](ImgReal-timeCHAT.png)

## 🚀 Funcionalidades

- Comunicação em tempo real
- Interface responsiva e intuitiva
- Suporte a múltiplos usuários
- Documentação detalhada

## 🛠️ Tecnologias

- Node.js
- WebSocket (ws)
- JavaScript
- HTML/CSS

## 📦 Dependências

```bash
json{
    "dependencies": {
    "ws": "^8.18.0"
    },
    "devDependencies": {
    "nodemon": "^3.1.9",
    "tsx": "^4.19.2"
    }
}
```


## 🏃‍♂️ Como Executar

1. Clone o repositório
```bash
    git clone https://github.com/seu-usuario/real-time-chat.git
```

2. Instale as dependências
```bash
    npm install
```
3. Execute o servidor
```bash
    npm run start:dev
```


## 📍 Endpoints

- Chat: `http://localhost:8080/`
- Documentação: `http://localhost:8080/doc`

## 📁 Estrutura do Projeto
```bash
├── src/
│ ├── server.js # Servidor principal
│ ├── websocket/
│ │ └── websocket.js # Lógica do WebSocket
│ └── routs/
│ └── routs.js # Rotas HTTP
├── public/
│ ├── index.htm # Interface do chat
│ └── Doc.htm # Documentação
├── package.json
└── README.md
```


## 📖 Documentação

A documentação completa está disponível em `/doc`, contendo:
- Comparação detalhada entre WebSocket e HTTP
- Explicação dos eventos e métodos WebSocket
- Guia de implementação
- Exemplos de código