const fs = require('fs');
const path = '../../videos.txt';
let file = fs.readFileSync(path,'utf8');

const desafio1 = (file) =>{
    //convierto cada linea en un array
    let linea = file.split(/\r?\n/);
    
    //busco las que tienen redux, mapeo en mins y seg, acumulo
    const tot= linea.filter(li => li.includes('Redux')).
        map(li =>{
            const posI = li.indexOf('"');
            const posF = li.indexOf('">');
            const duracion = li.slice((posI + 1),posF);

            const arrDur = duracion.split(':');
            return {min: arrDur[0], seg: arrDur[1]};
        }).
        reduce(acumular);

    return convertToSeg(tot);
}

const acumular = (a,b) => {
    return {
        min: parseInt(a.min) + parseInt(b.min),
        seg: parseInt(a.seg) + parseInt(b.seg)
    }
};

const convertToSeg = (time) => {
    return time.min * 60 + time.seg;
};

console.log("La duracion total en segundos de los videos tipo Redux Video es " + desafio1(file)); 