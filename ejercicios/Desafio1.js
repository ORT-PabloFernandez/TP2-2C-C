const fs = require('fs');
const path = './videos.txt';
const archivoAString = fs.readFileSync(path,'utf8');

const desafio = (archivoComoString) =>{
    // paso las lineas del archivo a un array de linea por linea
    let arrayLineas = archivoComoString.split(/\r?\n/);

    // aplico funciones a archivo leido
    const tiempoVideosRedux = arrayLineas
        .filter(linea => linea.includes('Redux'))
        .map(parseoTiempoVideo)

    console.log(`El tiempo total de los videos Redux es de -> ${tiempoTotal(tiempoVideosRedux)} segundos`);
}

const parseoTiempoVideo = (videoLinea) => {
    const inicioTiempoVideo = '="';
    const finTiempoVideo = '">';    

    const duracionTotalVideo = videoLinea.substring(videoLinea.lastIndexOf(inicioTiempoVideo) + inicioTiempoVideo.length, 
    videoLinea.lastIndexOf(finTiempoVideo)).split(":")
    
    const minutos = duracionTotalVideo[0]
    const segundos = duracionTotalVideo[1]

    return {
        min: minutos,
        seg: segundos
    }
}

const tiempoTotal = (tiemposVideosRedux) => {
    let acumuladorSegundos = 0
    tiemposVideosRedux.forEach((video) => {
        acumuladorSegundos += parseInt(video.min) * 60 + parseInt(video.seg)
    });

    return acumuladorSegundos
}

desafio(archivoAString); 