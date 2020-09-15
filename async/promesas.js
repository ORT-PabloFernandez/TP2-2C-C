//function promesas
// Es un objeto que nos va permitir manipular un exito o fracaso. 

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // Consultar un servicio
//         //resolve([7,4,5]);
//         reject('No pudo conectarse con el servicio');
//     }, 2000);
// });

// doWorkPromise
//     .then(result => {
//         console.log("Exito", result);
//     })
//     .catch(error => {
//         console.log("Error", error);
//     });

// retorna una promesa    
function resolver2segundos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            try {
                resolve('listo');
            } catch (error) {
                reject('')
            }

        }, 2000);
    });
}

 async function asyncCall(){
    console.log('Llamando..... ');
    const resultado = await resolver2segundos();
    console.log(resultado);
}

asyncCall();