const assert = require('assert').strict;

function nextPairs(value) {
let num=[0];
    if(value%2==0) {
        num[0] = value-2;
        num[1] = value+2;
    }else{
        num[0] = value-1;
        num[1] = value+1;
    }
    return num
}

 assert.deepStrictEqual(nextPairs(3), [2,4])
 assert.deepStrictEqual(nextPairs(4), [2,6])


console.log(`End`)