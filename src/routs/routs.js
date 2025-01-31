import fs from 'fs';
import path from 'path';

const handleHttpRequest = (req, res) => {

    if (req.url === '/') {
        const html = path.join(process.cwd(), 'public' ,'index.htm');

        fs.readFile(html, (error,data) =>{
            if(error){
                console.error('Erro ao ler arquivo:', error);

                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('Erro interno no servidor.');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        })


    } else if (req.method === 'GET' && req.url === '/doc') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Doc exec');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Serviço não encontrado');
    }
};

export default handleHttpRequest;

