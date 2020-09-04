const fs = require('fs');

const path = '../../../videos.txt';
let archivoComoString = fs.readFileSync(path,'utf8');


// defino las funciones
const filtroRedux = (linea)=>{
    return linea.includes('Redux');
};

const parseoTiempo = (linea) => {
    const inicioDataTime = '="';
    const finDataTime = '">';    
    let duracion = linea.slice(linea.indexOf(inicioDataTime) + inicioDataTime.length, linea.indexOf(finDataTime));
    let minutos = duracion.slice(0, duracion.indexOf(':'));
    let segundos = duracion.slice(duracion.indexOf(':') +1);
    return {min: minutos, seg: segundos};
}

const acumularTiempo = (acumulador,videoDuracion) => {
    return {
        min: parseInt(acumulador.min) + parseInt(videoDuracion.min),
        seg: parseInt(acumulador.seg) + parseInt(videoDuracion.seg)
    }
};

const segundosTotales = (tiempoVideoAcumulado) => {
    return tiempoVideoAcumulado.min * 60 + tiempoVideoAcumulado.seg;
};

const desafio1 = (archivoComoString) =>{
    // paso las lineas del archivo a un array de linea por linea
    let lineaPorLinea = archivoComoString.split(/\r?\n/);

    // aplico funciones a archivo leido
    tiempoVideoReduxAcumulado = lineaPorLinea
        .filter(filtroRedux)
        .map(parseoTiempo)
        .reduce(acumularTiempo);

    console.log(segundosTotales(tiempoVideoReduxAcumulado));
}

desafio1(archivoComoString);