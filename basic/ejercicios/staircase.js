
function dibujarEscalera(ladrillos) {

    let pisos=cantidadDePisos(ladrillos);
    let base=pisos;
    

    for (let index = 1; index <= pisos; index++) {
        mostrarLadrillos(index, base);
        process.stdout.write("\n");
    }
   
}

function mostrarLadrillos(cantidad, base){
    let ladrillo="#";
    let espaciosBlancos=base-cantidad;
    if(espaciosBlancos>0){
        process.stdout.write(' '.repeat(espaciosBlancos));
    }
    for (let index = 0; index < cantidad; index++) {
        process.stdout.write(`${ladrillo}`);
    }

}


function cantidadDePisos(tamanio){
let acumuladorLadrillosNecesarios=0;
let pisos=0;

for (let index = 1; acumuladorLadrillosNecesarios < tamanio; index++) {
    acumuladorLadrillosNecesarios=acumuladorLadrillosNecesarios+index;
    pisos++;
  }

    if (acumuladorLadrillosNecesarios === tamanio){
         return pisos;
       }else{
        throw new Error("no se puede hacer una escalera con esta cantidad de ladrillos");
       }

}
let ladrillos = process.argv.slice(2)[0];

dibujarEscalera(parseInt(ladrillos));
