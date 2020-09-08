setTimeout(() => {
    console.log('Hola mundo despues de 2 seg');
}, 5 * 1000);

setInterval(() => {
    console.log('Hola mundo cada 4 segundos');
}, 4 * 1000);

// Hola mundo cada segundo solo 5 veces
// let i= 0;
// const timerid = setInterval(() => {
//     console.log('Hola mundo', i);
//     i ++;
//     if(i===5){
//         clearInterval(timerid);
//     }
// }, 1000);