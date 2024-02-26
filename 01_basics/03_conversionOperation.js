let score = "name"

// Two ways to know types

console.log(typeof score); // string
console.log(typeof(score)); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber);  // NaN

let value1 = null

let valueInNumber1 = Number(value1)
console.log(valueInNumber1); // 0

let value2 = undefined

let valueInNumber2 = Number(value2)
console.log(valueInNumber2);  // NaN

let value3 = ""

let valueInNumber3 = Number(value3)
console.log(valueInNumber3);  // 0

let value4 = true

let valueInNumber4 = Number(value4)
console.log(valueInNumber4);  // 1

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "name"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string

// *********************** Operations ***********************

let value = 3
let negValue = -value

console.log(negValue); // -3

console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**3); // 2 * 2 = 4 * 2 = 8
console.log(2/3); // 0.66
console.log(2%3); // 2

let str1 = "Hello"
let str2 = " Name"

let str3 = str1 + str2
console.log(str3); // Hello Name

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log( (3 + 4) * 5 % 3); // 2

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101