
const minMaxSum= (arrayCincoEnteros)=> {

    let arrayDeMenorAMayor= ordenarDeMenorMayor(arrayCincoEnteros);

    let sumaMin= sumarXPrimerosNumeros(arrayDeMenorAMayor, 4);
    let sumaMax= sumaXUltimosNumeros(arrayDeMenorAMayor, 4);


    console.log(`La minima suma del Array es ${sumaMin} y la máxima suma es ${sumaMax}`);
};


function ordenarDeMenorMayor(arrayNumbers){
    let arrayOrdenado = arrayNumbers.sort((a, b) => a - b );
    return arrayOrdenado;
};


function sumarXPrimerosNumeros(arrayDeMenorAMayor, cantidadASumar){
    let suma=0;
    for (let index = 0; index < cantidadASumar; index++) {
        suma= suma+ arrayDeMenorAMayor[index];
    }
    return suma;
}

function sumaXUltimosNumeros(arrayDeMenorAMayor, cantidadASumar) {
    let primerasPosiciones = arrayDeMenorAMayor.length - cantidadASumar;
    let sumaUltimos = 0;

    for (let index = primerasPosiciones; index <= cantidadASumar; index++) {
        sumaUltimos= sumaUltimos+ arrayDeMenorAMayor[index];
        
    }
    return sumaUltimos;
}


console.log(minMaxSum([1,5,3,7,9]) === "La minima suma del Array es 16 y la máxima suma es 24");
console.log(minMaxSum([13,5,1,1,26]) === "La minima suma del Array es 20 y la máxima suma es 45");
console.log(minMaxSum([11,4,5,1,1]) === "La minima suma del Array es 11 y la máxima suma es 21");


