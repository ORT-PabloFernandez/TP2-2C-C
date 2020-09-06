const fs = require('fs');
const ubicacion = './videos.txt';
let archivo= fs.readFileSync(ubicacion,'utf-8');


let files = archivo.split("<li");
files.shift();
let videos=[];

files.map(video => 
    videos.push({ 
        duracion: video.slice(12,17), tipo: video.slice(18,33)
    })
)

for (let i = 0; i < videos.length; i++) {
    const vid = videos[i];
    if (vid.tipo == 'Redux Video</li'){
        vid.tipo= 'Redux Video';
    }
    if (vid.tipo == 'Flexbox Video</' || vid.tipo == '>Flexbox Video<'){
        vid.tipo= 'Flexbox Video';
    }
    
}

videos = videos.filter(elemento => elemento.tipo === 'Redux Video');

let segundosTotales = 0;

videos.forEach(videos => {
    let min = videos.duracion.split(':' , 1) [0];
    let seg = videos.duracion.split(':', 2) [1];
    segundosTotales += parseInt(min) * 60 + parseInt(seg);
});

console.log(`Los segundos totales de los videos de tipo Redux son:  ${segundosTotales}`);



