import fs from 'fs';
import path from 'path';

const handleHttpRequest = (req, res) => {

    if (req.url === '/') {
        const html = path.join(process.cwd(), 'public' ,'index.htm');

        fs.readFile(html, (error,data) => {
            if (error) {
                console.error('Erro ao ler arquivo:', error);
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>Erro Interno no Servidor</h1><p>Desculpe, tivemos um problema ao processar sua solicitação.</p>');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        })
    } else if (req.url === '/doc') {
        const doc = path.join(process.cwd(), 'public' ,'Doc.htm');

        fs.readFile(doc, (error, data) => {
            if (error) {
                console.error('Erro ao ler arquivo:', error);
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>Erro Interno no Servidor</h1><p>Desculpe, tivemos um problema ao processar sua solicitação.</p>');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        });
    } else {
        // Página personalizada para erro 404
        const notFoundHtml = `
            <html>
                <head>
                    <title>404 - Página não encontrada</title>
                </head>
                <body>
                    <h1>Página não encontrada</h1>
                    <p>Desculpe, a página que você está procurando não existe.</p>
                    <p><a href="/">Voltar para a página inicial</a></p>
                </body>
            </html>
        `;

        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(notFoundHtml);
    }
};

export default handleHttpRequest;