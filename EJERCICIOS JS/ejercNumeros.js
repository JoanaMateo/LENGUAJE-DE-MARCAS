/*

8. Solicite cuatro números y los muestre en orden
9. Solicite números al usuario y calcule la media aritmética de todos ellos. Para
terminar de introducir números, el usuario introducirá un número negativo. Realizar
el mismo ejercicio para las medias armónica, cuadrática y geométrica
10. Solicite números enteros al usuario. Para terminar de introducir números, el usuario
introducirá el cero. A continuación se mostrará un sencillo histograma: El número de
positivos y el número de negativos usando asteriscos (uno para cada ocurrencia)
11. Solicite la estatura y el peso del usuario y, basándose en el cálculo de su IMC le
informe de su estado nutricional
12. Solicite un número al usuario y muestre la suma de todos los números naturales
desde el 1 hasta el número introducido
13. Solicite dos números al usuario y muestre la suma de todos los números naturales
entre ellos incluyendo ambos
14. Solicite una hora del día al usuario entre las 0 y las 11 y un número de horas. Se
mostrará que hora indicará el reloj pasadas ese número de horas
15. Solicite un número al usuario y muestre todos sus múltiplos del 0 al 100
16. Solicite un número y muestre el número de dígitos que lo forman
17. Solicite un número y muestre sus dígitos invertidos
18. Solicite un importe e indique el importe con IVA
19. Solicite un importe con IVA y lo indique sin IVA
20. Solicite un año e indique si es bisiesto o no
21. Solicite duraciones de tramos de viaje en minutos (hasta que se introduzca un cero o
un valor negativo) y muestre la duración del viaje en horas y minutos
22. Solicite un número y muestre su parte decimal
23. Solicite un número y muestre su parte entera
24. Solicite dos números y calcule su división indicando si ésta es exacta o no
 
25. Solicite una base y un exponente y calcule la potencia
26. Solicite un número al usuario y muestre todas las potencias de dos desde la 0-ésima
hasta la ingresada por el usuario
27. Solicite un número y muestre su factorial
28. Solicite dos números y muestre su coeficiente binomial
29. Calcule el número de puntos que suman las fichas del juego del dominó
30. Muestre las distintas combinaciones al lanzar dos dados
31. Solicite un número y muestre el numero de combinaciones que existen para obtener
ese número lanzando dos dados y sumando sus puntuaciones
32. Solicite un número en base decimal y lo muestre en binario, octal y hexadecimal
33. Solicite un número y muestre la parte entera de su raíz cuadrada
34. Solicite un número y muestre todos sus divisores
35. Solicite dos números e indique sus divisores comunes
36. Juegue al Fizz buzz
37. Solicite un número e indique si es primo o no
38. Solicite dos números y muestre su máximo común divisor
39. Solicite un número y lo descomponga en factores primos
40. Solicite un número y calcule la suma de sus dígitos
41. Muestre la tabla de multiplicar
42. Implemente una sencilla calculadora, en la que se solicite el primer operando, un
operador aritmético y el segundo operando para mostrar a continuación el resultado
43. Solicite números entre 0 y 998 hasta que el usuario introduzca el 999, en ese
momento muestra la suma de todos ellos (menos el 999)
44. Solicite un número de segundos y muestre este dato en horas, minutos y segundos
45. Solicite tres números al usuario e indique si forman los lados de un triángulo y en
caso afirmativo qué tipo de triángulo
46. Solicite números al usuario y muestre cuantos números mayores que cero se han
introducido y la suma de todos ellos. Para terminar, el usuario introducirá el cero
47. Calcule el número de años que deben transcurrir para que la suma de las edades de
tres hijos de 14, 12 y 9 años sea igual a la edad de su padre que ahora tiene 43
años
48. Solicite las dimensiones de una matriz, y muestre únicamente aquéllas posiciones
cuyas coordenadas sean, ambas, impares
49. Solicite al usuario un PIN (número de cuatro dígitos) y le ofrezca tres oportunidades
para introducir el mismo que uno elegido por el desarrollador
50. Solicite el número de horas que se ha trabajado y el número de horas extra y calcule
la nómina semanal bruta. La hora normal se paga a 10€ y la extra a 15€
51. Solicite la edad de un padre y la de su hijo y muestre el número de años que deben
transcurrir hasta que la edad del padre doble a la del hijo
52. Solicite un número y muestre el triángulo de Pascal de altura igual al número
introducido
53. Solicite los coeficientes de una ecuación de primer grado y muestre su solución
54. Solicite los coeficientes de una ecuación de segundo grado y muestre su solución
55. Solicite al usuario las coordenadas del centro y el radio de dos circunferencias e
indique si se cortan o no y en cuantos puntos
56. Solicite números al usuario entre el 1 y el 100 hasta que se averigüe el que ha
elegido el desarrollador. Para ayudar al usuario, cada vez que éste introduzca un número, se le indicará si el número a averiguar es mayor o menor que el número
    
introducido. Intercambiar los papeles y que sea ahora el usuario el que elije un
número y el programa tratará de adivinarlo
57. Solicite un número y muestre los dígitos de todos los números desde el 0 hasta el
solicitado en columnas, por ejemplo, para el número 26:
000000000011111111112222222
012345678901234567890123456
*/

alert("Salen los mensajes????");
function ejerc1();

function ejerc1() {
    //1. Solicite dos números y muestre su suma
    var num1 = prompt("Introduce un número, por favor");
    //Pasamos a tipo number.
    num1 = parseInt(num1);
    var num2 = prompt("Introduce un segundo número, por favor");
    //Pasamos a tipo number.
    num2 = parseInt(num2);
    alert("La suma del numero"+num1+"y "+num2+"es: "+(num1+num2));
}
function ejerc2() {
    //2. Solicite dos números y muestre el mayor de ellos
    var num1 = prompt("Introduce un número, por favor");
    //Pasamos a tipo number.
    num1 = parseInt(num1);
    var num2 = prompt("Introduce un segundo número, por favor");
    //Pasamos a tipo number.
    num2 = parseInt(num2);
    //Mostramos cúal es mayor:
    if (num1>num2){
        alert("El número "+num1+" es el mayor");
    }if (num2>num1) {
        alert("El número "+num2+" es el mayor");
    } else {
        alert("Los números son iguales");
    }
}
function ejerc3() {

    //3. Solicite un número y lo divida por 2, por 4 y por 8
    var num1 = prompt("Introduce un número, por favor");
    //Pasamos a tipo double.
    num1 = parseFloat(num1);
   prompt("Vamos a dividir su número entre 2, 4 y 8");
    
    //Mostramos el resultado:
    alert("El resultado de dividirlo entre 2 es: "+(num1/2));
    alert("El resultado de dividirlo entre 4 es: "+(num1/4));
    alert("El resultado de dividirlo entre 8 es: "+(num1/8));
}
function ejerc4() {
    //4. Solicite un número e indique si es par o impar
    var num1 = prompt("Introduce un número, por favor");
    //Pasamos a tipo number.
    num1 = parseInt(num1);
   if (num1%2 == 0) {
    alert("El numero "+num1+" es PAR");
   } else {
    alert("El numero "+num1+" es IMPAR");
   }
    
}
function ejerc5() {
    //5. Solicite un número y muestre una cuenta atrás

    var num1 = prompt("Introduce un número, por favor");
    //Pasamos a tipo number.
    num1 = parseInt(num1);

    //Con bucle for
    alert("Con el bucle for");
    for(var i = num1; i>=0; i-- ){
        alert(i);
    }
    //Con el bucle Do While
    alert("Con el bucle Do While");
    do{
    alert(num1);
    num1--;
    }while(num1>=0);
}
function ejerc6() {
    /*6. Solicite tres números y muestre el menor de ellos. Realizar el mismo ejercicio para n
    números y mostrar el mayor
    */

    var num1 = prompt("Introduce un número, por favor");
    //Pasamos a tipo number.
    num1 = parseInt(num1);
    var num2 = prompt("Introduce otro número, por favor");
    //Pasamos a tipo number.
    num2 = parseInt(num2);
    var num3 = prompt("Introduce el ultimo número, por favor");
    //Pasamos a tipo number.
    num3 = parseInt(num3);

    if (num1<num2 && num1<num3) {
        alert("El numero "+num1+" es el menor.")
    } if (num2<num1 && num2<num3) {
        alert("El numero "+num2+" es el menor.")
    } if (num3<num1 && num3<num2) {
        alert("El numero "+num3+" es el menor.")
    }else {
        alert("Creo que algún número es igual")
    }
    
}
function ejerc7() {
    //7. Solicite tres números y muestre el central, si no hay uno central, debe advertirlo

    //Declaramos un array:
    let conjuntoNum = new Array();
    //Rellenamos el array con bucle for:
    for(let i=0; i<conjuntoNum.length; i++){
        conjuntoNum[i]= prompt("Introduce un numero, por favor");
    }
    for(let i=0; i<conjuntoNum.length; i++){
       alert(conjuntoNum);
    }
    if (conjuntoNum.length%2==0) {
        alert("El conjunto de números introducidos NO tiene un central")
    }
    else {
        for(let i=0; i<conjuntoNum.length/2; i++){
            alert("El número central es "+conjuntoNum[conjuntoNum.length/2]);
        }
    }
}


