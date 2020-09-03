const fs = require('fs');

const path = "./inventors.json";

let datos = fs.readFileSync(path, 'utf8');

datos = JSON.parse(datos);

// Ejercicio, dado un archivo JSON de inventores, añadir un nuevo 
// inventor y a continuación grabarlo en el mismo archivo

const inventor = {
    first: 'Juan',
    last: 'Perez',
    year: 1987
};

datos.inventors.push(inventor);

datos = JSON.stringify(datos, null, "  ");
const path2 = './inventorsNuevo.json';
fs.writeFileSync(path2, datos);

console.log(datos);