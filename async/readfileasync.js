const fs = require('fs');
const path= './bigfile.txt';
//console.log('antes');
// try {
//     const data = fs.readFileSync(path, 'utf-8');
//     console.log(data);
// } catch (error) {
//     console.log(error.message);
// }
// console.log('despues');
fs.readFile(path, 'utf-8', (err, data) =>{
    if(!err) {
        console.log(data);
    } else {
        console.log(err.message);
    }
});

console.log('Esperando lectura de archivo ......');