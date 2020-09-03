const fs = require('fs');
const path = './texto.txt';

let datos = fs.readFileSync(path,'utf8');

console.log(datos);

datos += 'quiero una 🍕';

fs.writeFileSync(path,datos);

