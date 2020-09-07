/* ALUMNO: CAMELINO, Federico - CURSO: 2° 1° C - MATERIA: TP2 */

import fs from 'fs';

const path = "./videos.txt";
let stringVideos = fs.readFileSync(path, "utf-8"); //Leo y guardo el string leido
let objetoVideos = stringVideos.split("\n"); //Separo la cadena leida como array de strings
objetoVideos = objetoVideos.filter(objeto => objeto.includes("Redux")); //Obtengo solo los Videos Redux
const dataTimeTotal = tiempoTotal(objetoVideos);
console.log(`Duracion total de los Videos Redux: ${dataTimeTotal} seg.`);

//Recorre el objeto y suma los tiempos de cada video
//Se limita su uso a una estructura de tiempo de 3 dígitos (M:SS)
function tiempoTotal(objeto) {
      let tiempo = 0;
      let cont = 0;

      for (let i=0; i<objeto.length; i++) {
            for (let j=0, cont=0; j<objeto[i].length; j++) {
                  let dato = parseInt(objeto[i][j],10);
            
                  if (!isNaN(dato)) {
                        switch (cont) {
                              case 0: 
                                    tiempo = tiempo + 60*dato;
                                    break;
                              case 1: 
                                    tiempo = tiempo + (10*dato);
                                    break;
                              default:
                                    tiempo = tiempo + dato;
                                    break; 
                        }
                        cont++;
                  }           
            }
      }
      return tiempo;
}