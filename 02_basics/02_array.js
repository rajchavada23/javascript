const marvel_heros = ['Ironman', 'Spiderman', 'Thor'];

const dc_heros = ['Superman', 'Batman', 'Flash'];

// marvel_heros.push(dc_heros)

console.log(marvel_heros); // [ 'Ironman', 'Spiderman', 'Thor' ]
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // [ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'Flash' ]

// spred operators

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // [ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'Flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Captain")); // false
console.log(Array.isArray(['steave', 'roger'])); // true
console.log(Array.from("Captain")); // [ 'C', 'a', 'p', 't', 'a', 'i', 'n' ]
console.log(Array.from({name: "Steave"})); // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
console.log(Array.of("arr1", 1, 2, "arr2", 3, 4)); // [ 'arr1', 1, 2, 'arr2', 3, 4 ]