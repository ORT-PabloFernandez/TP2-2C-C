// Tipos de declaracion de funciones

// la forma mas tradicional
function add(a,b){
    return a + b;
}

// asginando a una variable/ const - Asigno la función a la variable NO lo que retorna la función

const square = function(x) {
    return x * x;
}

console.log(square(4));

// Arrow Function 
const getSum = (a,b) => {
    return a + b;
};

// (parametos) => {SENTENCIAS}
// parametro => {sentencias}
// parametro => expresion

const getSumchica = (a,b) => a + b;

getSumchica(4,7);




