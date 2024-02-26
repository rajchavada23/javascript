//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

console.log(typeof scoreValue); // number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false
console.log(anotherId); // Symbol(123)
console.log(typeof anotherId); // Symbol

const bigNumber = 3456543576654356754n

console.log(typeof bigNumber); // BigInt


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "Doga"]

let myObj = {
    name: "myname",
    age: 20,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // funcation

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anotherName = myYoutubename

anotherName = "newname"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "name@gmail.com",
    upi: "user@vbi"
}

let userTwo = userOne

userTwo.email = "useremail@gmail.com"

console.log(userOne);
console.log(userTwo.email);