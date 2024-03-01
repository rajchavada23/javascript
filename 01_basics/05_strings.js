const name = "Robert"
const repoCount = 50

console.log(name + repoCount + " value"); // Robert50 value
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is Robert and my repo count is 50

const gameName = new String("Prince-DC-game");

console.log(gameName); // [String: 'Prince-DC-game']
console.log(gameName[0]); // P
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 14
console.log(gameName.toUpperCase()); // PRINCE-DC-GAME
console.log(gameName.charAt(2)); // i
console.log(gameName.indexOf('n')); // 3

const newString = gameName.substring(0, 4);
console.log(newString); // Prin

const anotherString = gameName.slice(1, 4);
console.log('slice==>', anotherString); // rin

const newStringOne = "   Batman   b "
console.log(newStringOne); //     Batman    
console.log(newStringOne.trim()); // Batman
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));  // https://hitesh.com/hitesh-choudhary
console.log(url.includes('hitesh')); // true
console.log(url.includes('sweet')); // false

console.log(gameName.split('-')); // [ 'Prince', 'DC', 'game' ]

const newGameName = new String('God of war');
console.log(newGameName.split(' ')); // [ 'God', 'of', 'war' ]
console.log(newGameName.split('o')); // [ 'G', 'd ', 'f war' ]