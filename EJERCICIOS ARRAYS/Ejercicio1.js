/*
Dado un array de 10 posiciones que se rellenará con valores aleatorios,

Crea una función que solicite una posición por pantalla,
la función deberá eliminar el elemento de la posición indicada y desplazar todos los elementos de forma que no queden huecos.
Mostraremos el array inicial y el array final y el valor eliminado.
a. ¿Cómo lo harías utilizando el método splice?
b. ¿Cómo lo harías sin utilizar ningún método predefinido?
*/

function  posicionArray(Array) {

    let posicion = console.log("Que posición quieres eliminar por pantalla?");
    delete Array[posicion];
    console.log(Array);
}

//declaramos el array vacio.
let array = [];

/*
Otra forma de declarar el array.
let array1 = new Array(10);
Esta forma mejor no.
*/

//Rellenamos el array con valores aleatorios:
for(let i=0; i<10; i++){
    array[i]= Math.round((Math.random()*10));
}

//Mostramos el array por pantalla:
console.log(array);

posicionArray(array);


