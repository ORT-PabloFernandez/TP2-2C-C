// Coleccion de objetos
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

function print(inventors){
    console.log('Nombre      Apellido      Año');
    console.log('------------------------------');
    inventors.forEach(inventor => {
        console.log(`${inventor.first.padEnd(12,' ')}${inventor.last.padEnd(12,' ')}${inventor.year}`);
    });
}

// Ejercicio 1.
// Filtrar los inventores nacidos despues del 1800
console.log('Ejercicio 1.-');
print(inventors.filter( inventor => inventor.year > 1800));

// Ejercicio 2
// Convertir el apellido en mayusculas
console.log('Ejercicio 2.-');
print(inventors.map(inventor => 
     ({first: inventor.first, last: inventor.last.toUpperCase(), year: inventor.year})
));

// Ejercicio 3
// Aplicar ambas cosas, filtrado y mapeo
console.log('Ejercicio 3.-');
print(
  inventors
  .filter(inventor => inventor.year > 1800)
  .map(inventor => ({first: inventor.first, last: inventor.last.toUpperCase(), year: inventor.year}))  
);

// Ejercicio 4
// Buscar el inventor Kepler y retornar el objeto
console.log('Ejercicio 4.-');
console.log(inventors.find(inventor => inventor.last.toLowerCase == "kepler"));

// Ejercicio 5
// Alguno de los inventores nacio en 1858? 
console.log('Ejercicio 5.-');
console.log(inventors.some(inventor => inventor.year === 1858) );

// Ejercicio 6
// Si todos los inventores nacieron despues de 1500?
// .every

// Ejercicio 7
// Ordenar los inventores por fecha de nacimiento
console.log("Ejercicio 7.-")
print(inventors.sort((a,b) => {
    if( a.year > b.year){
        return 1;
    }
    else{ 
        return -1;
    }
}));

// Ejercicio 8.-
// 9.- Convertir el array a un formato:
//[{name: {first: 'first name',}}]
/**
 * [{name: 
 *      {
 *          first: 'first name',
 *          last: 'last name'
 *      }
 * }, 
 * year: year
 * ]
 * 
 */







