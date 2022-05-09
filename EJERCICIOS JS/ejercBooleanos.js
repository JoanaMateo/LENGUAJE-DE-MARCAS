var ejerc;
while(ejerc != 0){
    ejerc = prompt("Que ejercicio quieres visualizar, por favor");
    //pasamos a tipo number 
    ejerc = parseInt(ejerc);
    switch (ejerc){
        case 1:function ejerc1();
            break;
        case 2: function ejerc2();
            break;
        case 0: prompt("Adios");
            break;
        default: prompt("Solo hay dos ejercicios en este apartado, creo que no lo has introducido correctamente.");
            break;
    } 
        
}

function ejerc1(){
/*Solicite un dato, analice si se trata de un valor booleano, numérico o cadena de caracteres
muestre su valor de verdad.
*/

    var dato = prompt("Introduce un dato, por favor.");
//para analizar de que dato se trata usamos el operador typeof
alert(typeof dato);

//pidiendo el valor por pantalla siempre será un String. Lo transformamos a número:
alert(typeof parseInt(dato));
}

function ejerc2() {
    
    /*
    Muestre las tablas de verdad de los conectores lógicos:
    negación, conjunción, disyunción, implicación, bicondicional, disyunción exclusiva y negación de la disyunción exclusiva

    */
}
