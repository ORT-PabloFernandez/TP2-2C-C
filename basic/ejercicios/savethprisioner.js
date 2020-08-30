
function saveThePrisioner(nroprisioneros,caramelos,sillaDondeEmpiezaARepartir){

    // n= numero de prisioneros -- m=numero de golosinas --- s=nro de silla donde empieza a repartir
    let posicionPrisioneroEnvenenado;
    //Retorna el primer elemento de la cola, quitándolo de ésta.
    // scar del principio let primer = nombres.shift();


    if (nroprisioneros === 1) {
        posicionPrisioneroEnvenenado=nroprisioneros;
    } else {
        // recalculo caramelos sumando posicion inicial
        movDesdePosInicial = caramelos + sillaDondeEmpiezaARepartir - 1;

        //si los caramelos son menores a la cantidad de prisioneros 
        posicionPrisioneroEnvenenado= calcularNroPrisionero(movDesdePosInicial,nroprisioneros);        
    } 



    return posicionPrisioneroEnvenenado;

}

// 7 prisioneros e hizo 3 movimientos= 3 ; 
// 10 mov , prisioneros 4 ; 2
function calcularNroPrisionero (movDesdePosInicial, nroprisioneros){
    let nroPrisionero;
    if (movDesdePosInicial < nroprisioneros) {
        nroPrisionero=movDesdePosInicial;
    } else {
        // si da exacto termina en el ultimo prionero, sino tengo buscarlo
        if (movDesdePosInicial%nroprisioneros == 0){
            nroPrisionero = nroprisioneros;
        } else {
            vueltas = Math.trunc((movDesdePosInicial/nroprisioneros));
            nroPrisionero = movDesdePosInicial - vueltas * nroprisioneros;
        }
    }
    return nroPrisionero; 
}


console.log(saveThePrisioner(5,2,1) === 2);   // da ok 

console.log(saveThePrisioner(1,1,1) === 1);  // no da 
console.log(saveThePrisioner(5,2,2) === 3);  
console.log(saveThePrisioner(3,7,3) === 3);  // no da 
console.log(saveThePrisioner(7,19,2) === 6);  
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);  
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(353972922, 573651462, 244520504) === 110226121);


