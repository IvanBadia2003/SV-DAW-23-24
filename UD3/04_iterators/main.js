'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple(array) {
  console.log(`Iterador simple`);
  for (let i = 0; i < array.length; i++) {
    console.log(pilots[i]);
  }
  console.log('\n');
}

function iterateForEach(array) {
  console.log(`Iterador forEach`);
  array.forEach((number) => console.log(number))
  console.log('\n');
}

function mapIds(array) {
  console.log(`Mapa Id`)
  let result_map = array.map(number => number.id)
  console.log(result_map);
  console.log('\n');
  return result_map;
}

function rebels(array) {
  console.log(`Rebels`)
  let rebels = [];
  rebels = array.filter(number => number.faction === 'Rebels')
  console.log(rebels);
  console.log('\n');
  return rebels;

}

function totalFaction(array, faction) {
  console.log(`Total Faction`);
  let result_map = [];
  let cantidad = 0;
  result_map = array.filter(number => number.faction === faction);
  for (let i = 0; i < result_map.length; i++) {
    cantidad++;
  }
  console.log(cantidad)
  console.log('\n');
  return cantidad;
}

function avgYears(array, faction) {
  console.log(`Media de Edad`)
  let pilotos = [];
  pilotos = array.filter(number => number.faction === faction)
  let result_map = pilotos.map(number => number.years);
  let avgYears = result_map.reduce((a, b) => (a += b) / result_map.length)
  console.log(avgYears)
  return avgYears
}

// use console.log
iterateSimple(pilots)
iterateForEach(pilots)

try {
  assert.deepStrictEqual(mapIds(pilots), [2, 8, 40, 66])
  assert.deepStrictEqual(rebels(pilots), [pilots[0], pilots[3]])

  assert.deepStrictEqual(totalFaction(pilots, 'Rebels'), 2)


  assert.deepStrictEqual(avgYears(pilots, 'Rebels'), 22.5)
  assert.deepStrictEqual(avgYears(pilots, 'Empire'), 25)
} catch (error) {
  console.error(error)
}

console.log(`\nEnd`)