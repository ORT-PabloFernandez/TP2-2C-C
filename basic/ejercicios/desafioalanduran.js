var fs = require('fs');
var texto = fs.readFileSync('./videos.txt', 'utf8');

function sumatoriaSegundosRedux(){
        datos = texto
        .toString()
        .replace('<ul>','')
        .replace('</ul>','')
        .split('</li>')
        .slice(0,-1)
        .map(datos => ({
            minutos: parseInt(datos
                .replace('<li data-time="','')
                .split(':')[0]),
            segundos: parseInt(datos
                .split(':')[1]),
            tipoVideo: datos.split('">')[1]
        }));
        var totalSec = 0;
        datos
        .filter(dato => dato.tipoVideo === "Redux Video" )
        .forEach(dato => { totalSec += dato.minutos * 60 + dato.segundos; });
        console.log(totalSec);
}

sumatoriaSegundosRedux();