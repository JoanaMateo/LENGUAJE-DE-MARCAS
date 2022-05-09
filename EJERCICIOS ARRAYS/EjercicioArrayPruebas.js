/*
Dado un array de 10 posiciones que se rellenará con valores aleatorios,

Crea una función que solicite una posición por pantalla,
la función deberá eliminar el elemento de la posición indicada y desplazar todos los elementos de forma que no queden huecos.
Mostraremos el array inicial y el array final y el valor eliminado.
a. ¿Cómo lo harías utilizando el método splice?
b. ¿Cómo lo harías sin utilizar ningún método predefinido?
*/

let arrayVacio = [];
//El array está declarado pero no está relleno.
//Este array está preparado para ser rellenado, pero está vacio.
let array2 = new Array (10);
let array3 = new Array (10);
let array4= [];
// introduce 5 valores solicitados por teclado --> for(let i=0;i<5;i++)array4[i]=prompt(valor);
/*
let i=0, valor;
do{
    valor=prompt('Introduce algo');
    if(valor>=0){
        array[i]=valor;
        i++;
    }
}while(valor>0)// quiero parar cuando introduzca un número negativo
alert(array4);
*/

//Usando .fill(); relleno el mismo valor desde la posicion 0 hasta la posicion 10.


array2.forEach(function(item,index,array2){
    array2.fill (2,0,10);
});

//Quiero rellenar 10 posiciones con valores aleatorios:

//Mostramos por pantalla

    arrayAleatorio.forEach(function(item,index,arrayAleatorio){
        document.write("Posición " + index + ": " + item);
    });

