
function catAndMouse(gato1, gato2, raton){

let posicionGato1=gato1;
let posicionGato2=gato2;
let posicionRaton=raton;

let respuestaA="Cat A";
let respuestaB="Cat B";
let respuestaC="Mouse C";

let distanciaGato1= distancia(posicionGato1, posicionRaton);
let distanciaGato2= distancia(posicionGato2, posicionRaton);


if (distanciaGato1<distanciaGato2) {
    return respuestaA;
} else { 
    if (distanciaGato1===distanciaGato2) {
        return respuestaC;
    } else {
        return respuestaB;
    }
}

}

function distancia (a,b){
   let distancia= b-a;
   return Math.abs(distancia);
}

// test 

console.log(catAndMouse(1,2,3) === "Cat B" );
console.log(catAndMouse(1,3,2) === "Mouse C");
console.log(catAndMouse(2,1,3) === "Cat A");
console.log(catAndMouse(3,1,2) === "Mouse C");  
console.log(catAndMouse(3,2,1) === "Cat B");



