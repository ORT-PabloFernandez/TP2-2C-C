const fs = require('fs');
const { time } = require('console');
const path = '../../videos.txt';
const reducer = (acumulador, valorActual) => acumulador + valorActual;

let file = fs.readFileSync(path, 'utf8');

let videos = file.split('<li');
let tiempoVideos = videos.filter(a => a.includes('Redux')).map(tiempo => tiempo.substring(tiempo.indexOf('="') + 2, tiempo.lastIndexOf('">')))

let minutos = tiempoVideos.map(min => parseInt(min.substring(0, min.indexOf(':'))))
let segundos = tiempoVideos.map(min => parseInt(min.substring(min.indexOf(':') + 1, min.length)))

let tiempoTotalEnSegundos = minutos.reduce(reducer) * 60 + segundos.reduce(reducer)

console.log("Tiempo total en segundos: " + tiempoTotalEnSegundos)

