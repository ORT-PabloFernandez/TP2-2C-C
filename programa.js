const fs = require('fs');
const path = './videos.txt';
let file = fs.readFileSync(path, 'utf8');
    let time;
    let totalSecs = 0;



let arrayDeVideos = file.split('<li');
arrayDeVideos.shift();
let filtroRedux = arrayDeVideos.filter(a => a.includes('Redux'))
  .map(l => ({
    duracion: l.substr(12, 4)
})
  )

filtroRedux.forEach(redux => {
time = parseInt(redux.duracion.substr(0, 1)) * 60 + parseInt(redux.duracion.substr(2, 2));
totalSecs += time;
        }
    )
   

console.log("El total de segundos de video Redux son: " + totalSecs);