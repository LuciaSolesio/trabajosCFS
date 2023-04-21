/* IMPLEMENTE UN METODO LLAMADO cantidadDeDivisores QUE RECIBA UN NUMERO ENTERO Y DEVUELVA LA CANTIDAD DE DIVISORES.
POR EJ, PARA EL NUMERO 16
*/

import * as rls from "readline-sync";

let dividendo : number = rls.questionInt("Ingrese un dividendo: ");
let divisor : number = 0;
let cantMulti : number = 0;


for (divisor = 1; divisor <= dividendo; divisor ++) {
    if (esMultiplo(dividendo,divisor)) {
        cantMulti++;
        console.log(divisor)
    }
}

function esDivisor(dividendo:number, divisor:number): boolean {
    
    if (dividendo % divisor == 0){
        return true;
    } else {
        return false;
    }
}

function esMultiplo(num1: number, num2: number): boolean {
    if (num1 % num2 == 0) {
        return true;
    } else {
        return false;
    }
}
 
