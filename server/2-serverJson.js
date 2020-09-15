const http = require('http');
const { response } = require('express');

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  http.createServer((req, resp) =>{
    resp.writeHead(404, {'Content-Type': 'application/json'});
    //resp.write(JSON.stringify(inventors, null, ' '));
    resp.write('Archivo no encontrado');
    resp.end();
  }).listen(3000,'localhost');