/*Leer valores del usuario hasta que introduzca un 0
    • El usuario puede introducir valores numéricos, tanto
    positivos como negativos
    • Contar la cantidad de valores introducidos que sean
    mayores a 0 y el porcentaje de positivos respecto del total*/


import * as rls from "readline-sync";

let numIngresado, negativos, positivos : number;
numIngresado = -1;
negativos = 0;
positivos = 0;
let suma : number = 0;
let multiplicacion : number = 0;

while (numIngresado != 0) {
    numIngresado = rls.questionInt("Ingrese un numero: ");
    if (numIngresado > positivos && numIngresado != 0) {
        positivos = positivos + 1;
    } if (numIngresado < negativos && numIngresado != 0) {
        negativos = negativos + 1;
    } if (numIngresado == 0) {
        suma = negativos + positivos;
        multiplicacion = (positivos * 100) / suma;
        
    }

}console.log(positivos, "son mayores a 0 y el", multiplicacion, "% son positivos");

/*let numero : number = 0;
let positivos : number = 0;
let negativos : number = 0;
let porcentaje : number = 0;
let cantidad : number = 0;



while (numero != 0) {
    let numero : number = rls.questionInt("Ingrese un numero: ");
    if (numero > positivos && numero !=0) {
        positivos = positivos ++ ;
    } if (numero < negativos && negativos != 0) {
        negativos = negativos +1;
    } if (numero == 0) {
        cantidad = positivos + negativos;
        porcentaje = (positivos * 100)/cantidad;
        
    } 
}console.log("La cantidad de numeros positivos es: ", positivos, " y el porcentaje de numeros positivos es ", porcentaje);
*/