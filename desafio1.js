//Importo objeto filesystem
const fs = require('fs')

//Declaro constante el path del archivo
const path = "videos.txt"

//Obtengo archivo en forma de string
let datos = fs.readFileSync(path, 'utf8')

//Split string
let arrayDatos = datos.split("<li");

//Elimino primer elemento del array (el split me deja un elemento demas vacío, como podría haber resuelto esto? para no tener que hacer el shift())
arrayDatos.shift()

//Declar el array que contendra los objetos
let videos = []

//Mapeo mi array para llenar mi array con los datos en forma de objetos (Como podría no haber hardcodeado en el slice()?)
arrayDatos.map(registro => 

    videos.push({ duracion: registro.slice(12,16), tipo: registro.includes('Flexbox Video') ? 'Flexbox Video':'Redux Video' })

)

//Filtro mi array de objetos, solo los tipo Redux Video
videos = videos.filter( registro => registro.tipo = 'Redux Video')

//Declaro variable que acumulara el total de segundos
let duracionTotalSegundos = 0

//Recorro mi array filtrado para hacer el conteo de segundos
videos.forEach(video => {
    
    let minutos = video.duracion.split(':')[0]
    let segundos = video.duracion.split(':')[1]
    
    duracionTotalSegundos += parseInt(minutos) * 60 + parseInt(segundos)

});

console.log('La duracion total en segundos de los video de tipo Redux es: ' + duracionTotalSegundos)