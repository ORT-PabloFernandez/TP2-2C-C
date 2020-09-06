// agrego la ubicacion del archivo
const fs = require('fs');
const ubicacion = './videos.txt';
//guardo el contenido del archivo en la variable archivo
let archivo= fs.readFileSync(ubicacion,'utf-8');
let data = archivo.split("<li");
// saco el primer ojeto del array 
data.shift();
//defino el array que voy a usar
let arrayVideo=[];
data.map(variable => 
    arrayVideo.push({ 
        //elijo los caracteres del 12 al 16
        duracion: variable.slice(12,17), tipo: variable.slice(18,33)
    })
)
// cambiamos los nombres de los campos para arreglarlos
for (let i = 0; i < arrayVideo.length; i++) {
    const video = arrayVideo[i];
    if (video.tipo == 'Redux Video</li'){
        video.tipo= 'Redux Video';
    }
    if (video.tipo == 'Flexbox Video</' || video.tipo == '>Flexbox Video<'){
        video.tipo= 'Flexbox Video';
    }
    
}
// filtro el array
arrayVideo = arrayVideo.filter(variable => variable.tipo === 'Redux Video');
let minutos=0;
let segundos=0;
let calculoTotal= 0;
//recorremos array
arrayVideo.forEach(variable => {
    minutos = variable.duracion.split(':')[0];
    segundos = variable.duracion.split(':')[1];
    calculoTotal += parseInt(minutos) * 60 + parseInt(segundos);
});

console.log(`Los segundos totales de los videos Redux son:  ${calculoTotal}`)






