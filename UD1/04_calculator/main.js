// Declarar 2 variables con número e imprimir por consola (mediante console.log()) el valor de:
// Suma
// Resta
// Multiplicación
// División


// define variables
let x, y;
let result;

function suma(x, y){
    result = x + y;
    return `La suma de ${x} y ${y} es ${result}`;
}
function resta(x, y){
    result = x - y;
    return `La resta de ${x} y ${y} es ${result}`;
}
function multiplicacion(x, y){
    result = x * y;
    return `La multiplicacion de ${x} y ${y} es ${result}`;
}
function division(x, y){
    result = x / y;
    return `La division de ${x} y ${y} es ${result}`;
}

// print sum, substract, multiply and divide
console.log(suma(1, 4))
console.log(resta(1, 4))
console.log(multiplicacion(1, 4))
console.log(division(1, 4))

