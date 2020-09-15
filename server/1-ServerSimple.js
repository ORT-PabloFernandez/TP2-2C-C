const http = require('http');
const port = 3000;

http.createServer((req, res) =>{
    res.writeHead(500, {'Content-Type': 'text/html'});
    res.write('Error interno');
    res.end();
}).listen(port, '127.0.0.1', () => console.log(`Servidor en el puerto ${port}`));