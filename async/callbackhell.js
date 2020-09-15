// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor
// 3.- Actualizar el archivo
// 4.- Leer el archivo actualizado
// 5.- Mostrarmos en consola el listado.

const fs = require('fs');
const path = '.././filesystem/inventors.json';
// 1.-Leer archivo
fs.readFile(path, 'utf8', (err, data)=>{
    if(!err){
        data = JSON.parse(data);
        // 2.-insertar nuevo objeto
        data.inventors.push({
            first: "René",
            last: "Favaloro",
            year: 1923
        });
        // 3.- escribir en archivo
        fs.writeFile(path, JSON.stringify(data, null, ' '), err => {
            if(!err){
                // 4.- Leer archivo actualizado
                fs.readFile(path, 'utf8', (err, data) =>{
                    if(!err){
                        // 5.- Mostrar en consola
                        console.log(JSON.parse(data));
                    }
                });
            }
        })
    }
});