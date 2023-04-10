import * as rls from "readline-sync";


let result : string = "";

for (let i : number = 1; i <= 100; i ++) {
    if (i % 2 === 0 || i % 3 === 0) { 
        result = result + i + " "; //le agrego 1 al resultado y un espacio para que se lea mejor, sino quedarían pegados
    }                               // result + i e sigual a decir result +=
                            // en vez de i + " " se puede poner `${i}, `
}
console.log(result);

/*En vez de la linea 5, puedo poner console.log(i), la diferencia es que me los va a mostrar uno abajo del otro. 
Debería borrar la variable declarada result y el console.log del final*/
