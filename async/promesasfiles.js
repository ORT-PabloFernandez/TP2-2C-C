// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor
// 3.- Actualizar el archivo
// 4.- Leer el archivo actualizado
// 5.- Mostrarmos en consola el listado.

const fs = require('fs').promises;
const path = '.././filesystem/inventors1.json';

async function operacionesInventors(){
    try {
        // 1.- Leer archivo
    let data = await fs.readFile(path, 'utf-8');

    // 2.- insertar un inventor
    data = JSON.parse(data);
    data.inventors.push({
        first: "Steve",
        last: "Jobs",
        year: 1967
    });
    // 3.- Escribiendo en el archivo
    await fs.writeFile(path, JSON.stringify(data, null, ' '));
    // 4 y 5 .- leer y  motrando en consola
     console.log(await fs.readFile(path,'utf-8'));
    } catch (error) {
        console.log("Se genero un error", error);
    }
    
}

operacionesInventors();

