const fs = require('fs');
const path = './videos.txt';
const reduxVideoType = 'Redux Video';
const segundosTotalesEsperados = 1847;

//Funcion principal para obtener el total en segundos de la duracion de videos Redux
obtenerResultadoTotalEnSegundosDeVideosRedux = () => {
    let lineasDelArchivo = fs.readFileSync(path, 'utf-8');
    let lineasRedux = obtenerLineasDelTipoRedux(lineasDelArchivo);
    let duracionTotal = 0
    lineasRedux.forEach(linea => {
        let time = obtenerDataTime(linea);
        let minutos = Number(time.split(':')[0])
        let segundos = Number(time.split(':')[1])
        let duracionEnSegundos = minutos * 60 + segundos;
        duracionTotal = duracionTotal + duracionEnSegundos;
    });
    return duracionTotal;
} 

// Obtener los minutos y segundos que se encuentran entre comillas
obtenerDataTime = linea => {
    let resultado = linea.match(/"([^"]+)"/)[1];
    return resultado;
}

//Metodo para obtener las lineas que son de tipo Redux Video
obtenerLineasDelTipoRedux = lineasArchivo => {
    let resultado = lineasArchivo.split('\n')
                                 .filter(linea => linea.indexOf(reduxVideoType) != -1);
    return resultado;
}

//Test de verificacion ... Resultado esperado = 1847 segundos.
console.log(segundosTotalesEsperados == obtenerResultadoTotalEnSegundosDeVideosRedux());


