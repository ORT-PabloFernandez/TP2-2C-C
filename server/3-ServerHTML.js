const http = require('http');
const chalk = require('chalk');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let html = fs.readFileSync('./index.htm','utf-8');
    html = html.replace('{mensaje}', 'Hola mundo template');
    res.end(html);
}).listen(3000,'localhost', ()=>{
    console.log(chalk.yellow.bgBlueBright('Servidor disponible'));
});