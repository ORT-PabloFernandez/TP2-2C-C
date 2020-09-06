const fs = require('fs');
const path = '.././videos.txt';
let datos = fs.readFileSync(path,'utf8');

let arrayVideos = datos.split('<li');

arrayVideos.shift();

let arrayVideosRedux = arrayVideos.filter(name => name.includes('Redux'));

let arrayVideosReduxDuracion = arrayVideosRedux.map(video => ({ duracion: video.substr(12, 4) }));

const obtenerTiempo = array => {
    let tiempo;
    let tiempoTotal = 0;
    array.forEach(
        obj => {
            tiempo = parseInt(obj.duracion.substr(0, 1)) * 60 + parseInt(obj.duracion.substr(2, 2));
            tiempoTotal += tiempo;
        }
    )
    return (tiempoTotal - (tiempoTotal % 60)) / 60 + ':' + tiempoTotal % 60;
}

console.log(obtenerTiempo(arrayVideosReduxDuracion));

