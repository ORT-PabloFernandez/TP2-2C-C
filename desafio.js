const fs = require('fs');
const path = './videos.txt';

let datos = fs.readFileSync(path,'utf8');  // primero leo el archivo de texto y lo guardo en datos


    var arrayDeCadenas = datos.split("</li>");  //separo el texto en un array por video.
   
    arrayDeCadenas[0] = arrayDeCadenas[0].replace("<ul>", "")  //reemplazo palabras del mi array
   
    var arrayDeCadenas2 = [arrayDeCadenas.length-1]

    for (i = 0; i < arrayDeCadenas.length-1;i++) {     //se sigue sacando terminos que no sirven
   
    arrayDeCadenas2[i] = arrayDeCadenas[i].replace("\r\n  <li data-time=\"", "")
  
}


// creo una matriz de 2 x 20 que representa los videos y su duracion
 

var videos = []

for (i = 0; i < arrayDeCadenas2.length;i++) {

videos.push(arrayDeCadenas2[i].split("\">"))

}
console.log("DESAFIO1: ALUMNO DIEGO CHIARADIA")
console.log("MATRIZ DE LOS TIPOS DE VIDEO Y SUS RESPECTIVAS DURACIONES")
console.log(videos)


// busco en mi matriz los redux video y sumo sus segundos
let acum = 0
let duracion = 0
let duracion2 = 0 

for (i = 0; i < videos.length;i++) {
        
         if (videos[i][1] === "Redux Video") {

         duracion = videos[i][0]
         duracion = duracion.replace(":", ".") // cambio el ":" de la hora a "." (para pasarlo a float)
         duracion = parseFloat(duracion) // paso la hora de String a float
         duracion2 = Math.floor(duracion)*60 + (duracion%1)*100 //paso los minutos a segundos y como converti los segundos a 0.XX multiplico por 100 y los obtengo de nuevo.
         acum = acum + duracion2
         
     }
    
    }
     
   console.log("El total de la duración de todos los Redux Videos es de " + 
   Math.floor(acum) + " segundos" )
     