const score = 200
console.log(score); // 200

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.5896

console.log(otherNumber.toPrecision(1)); // 1e+2
console.log(otherNumber.toPrecision(2)); // 1.2e+2
console.log(otherNumber.toPrecision(3)); // 124
console.log(otherNumber.toPrecision(4)); // 123.6
console.log(otherNumber.toPrecision(5)); // 123.59
console.log(otherNumber.toPrecision(6)); // 123.590

const hundreds = 1000000

console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.4)); // 5
console.log('ceil', Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // 0.524561651
console.log((Math.random() * 10) + 1); // 6.524561651
console.log(Math.floor(Math.random() * 10) + 1); // 6

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 15