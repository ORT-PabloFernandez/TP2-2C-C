const fs = require('fs');
const path = './videos.txt';

const str = fs.readFileSync(path, 'utf8');

/**
 * Funcion que retorna un array de objetos de video
 * @param {*} str cadena a parsear
 */
function getVideos(str){
    return str
        .replace('<ul>','')
        .replace('</ul>','')
        .split('</li>')
        .slice(0,-1)
        .map(video => ({
            min: parseInt(video
                .split('"')[1]
                .split(':')[0]),
            seg: parseInt(video
                .split('"')[1]
                .split(':')[1]),
            tipo: video.split('>')[1]
        }));
}

function getTotalSegundos(videos, tipo){
    let totalsegundos = 0;
    videos
        .filter(video => video.tipo === tipo)
        .forEach(video => {
            totalsegundos += video.min * 60 + video.seg;
        });
    return totalsegundos;
}

console.log(
    getTotalSegundos(
        getVideos(str), 
        "Redux Video")
    );
