const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
let hor = 0, min = 0, sec = 0;

hor= Math.round(value/3600);
min = Math.round((value%3600)/60);
sec = (value%3600)%60;

let retorna = `${hor}:${min}:${sec}`

return retorna;
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
 assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
 assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")

console.log(`End`)