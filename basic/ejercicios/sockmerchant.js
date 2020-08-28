// John trabaja en una tienda de medias. 
//Tiene una larga pila de medias que tiene que aparear por color. 
//Dado un array de numeros enteros que representan el color de cada media, determine 
//cuantos pares de medias (segun color) hay.

//Ejemplo

//[10, 20, 20, 20, 20, 30, 50, 10, 20]
//PILA: ÚLTIMO EN ENTRAR PRIMERO EN SALIR
//Ejemplo de salida
//3

// agregar elemento al final de un array
//nombres.push('Elena');

// sacar del final
//let ultimo = nombres.pop();

//ej funcion borrar un elemento
//function removeItemFromArr ( arr, item ) {
  //  var i = arr.indexOf( item );
    // arr.splice( i, 1 );
// }



function sockmerchant (pilaNumerosColores){
    let contadorPares=0; 
     

   while (pilaNumerosColores.length!==0) {
    let numeroColor= pilaNumerosColores.pop();
    let posicionDePar= buscarCoincidencia(numeroColor, pilaNumerosColores);
        if (posicionDePar!==-1) {
            contadorPares++;
            pilaNumerosColores.splice( posicionDePar, 1 );
          } else {
              console.log(`La media ${numeroColor} no tiene par`);
                      }
   }
   console.log(`Hay ${contadorPares} pares de medias`);
}

function buscarCoincidencia(numeroABuscar, arrayDondeBuscar){
    let posicion= arrayDondeBuscar.indexOf(numeroABuscar);
    return posicion;
}

console.log(sockmerchant([10, 20, 20, 20, 20, 30, 50, 10, 20]));
console.log(sockmerchant([10, 34, 10, 32, 20, 30, 20, 1, 1,32]));
console.log(sockmerchant([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));




