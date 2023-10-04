const assert = require('assert').strict;

function select(array, condition) {
    return condition(array)
}

function pairs(array) {
    let result = [];
    console.log(`Numeros pares`)
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            result = array.filter(number => number % 2 == 0)
        }
    }
    return result;

}

function gt15(array) {
    let result = [];
    console.log(`Numeros mayores de 15`)
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 15) {
            result = array.filter((number) => number > 15)
        }
    }
    return result;
}

function lt10(array) {
    let result = [];
    console.log(`Numeros menores de 10`)
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 10) {
            result = array.filter((number) => number < 10)
        }
    }
    return result;
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])
 
// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])  

console.log(`End`)