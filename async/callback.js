/**
 *  Una funcion que es pasada como parametro a otra funcion
 *  para que en algun punto se invoque
 * 
 */

 function saludo(callback){
     console.log('Hola');
     const data = {
        name: 'pablo'
     };

     callback(data);
 }

 saludo(function(data){
    console.log('La funcion callback fue invocada');
    console.log(data.name);
 });

 saludo( data => {
     console.log('Otra funcion callbak se invoco');
     console.log(data.name);
 });