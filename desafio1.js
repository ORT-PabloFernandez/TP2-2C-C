const fs = require('fs');
const path = './videos.txt';
let videosTxt = fs.readFileSync(path,'utf8');

const parseoTiemVid = (videoLinea) => {
    const i = '="';
    const f = '">';    

    const durTotVideo = videoLinea.substring(videoLinea.lastIndexOf(i) + i.length,videoLinea.lastIndexOf(f)).split(":")
    
    const min = durTotVideo[0]
    const seg = durTotVideo[1]

    return {
        min: min,
        seg: seg
    }
}

const filtroVidRedux = (videoLinea)=>{
    return videoLinea.includes("Redux");
};

    
const acumular = (a,v) => {
    return {
        min: parseInt(a.min) + parseInt(v.min),
        seg: parseInt(a.seg) + parseInt(v.seg)
    }
};

const tiempTotal = (tiempo) => {
    return tiempo.min * 60 + tiempo.seg;
};

const desafio1 = (videosTxt) =>{
    let lineaPorLinea = videosTxt.split(/\r?\n/);
        tiempoVidRedeux = lineaPorLinea
        .filter(filtroVidRedux)
        .map(parseoTiemVid)
        .reduce(acumular);

    console.log(`La duracion total en segundos de los videos tipo Redux es de "  ${tiempTotal(tiempoVidRedeux)} `);
};
    return desafio1(videosTxt);



