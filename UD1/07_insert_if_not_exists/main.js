const assert = require('assert').strict

function insertIfNotExists(array, item, position) {
    if (array.includes(item)) {
        console.log(`${item} ya esta en el array`)
    } else {
        if (position) {
            array.unshift(item);
        } else {
            array.push(item);
        }
        return array
    }

}


let array = ['pera', 'manzana']

let result = insertIfNotExists(array, 'pera', true)
assert.deepStrictEqual(result, array)

console.log(array)


// result = insertIfNotExists(array, 'melón', false)
// assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

// result = insertIfNotExists(array, 'melocotón', true)
// assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])

