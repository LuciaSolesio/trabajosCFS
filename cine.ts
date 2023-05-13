/* Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay
• Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
• La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada. */

let butacasArr : boolean[] = [true, true, true, false, true, false, true, true, false, true];

for (let i = 0; i < butacasArr.length; i++){
    if (butacasArr[i] == true){
        console.log(`La butaca ${i+1} esta ocupada`);
    } else {
        console.log(`La butaca ${i +1} esta vacia`);
    }
}
