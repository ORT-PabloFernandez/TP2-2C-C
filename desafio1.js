const fs = require('fs');

const path = './videos.txt';
let datos = fs.readFileSync(path,'utf8');

console.log(datos);

