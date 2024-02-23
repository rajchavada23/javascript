//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

console.log(typeof scoreValue);

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(anotherId);

const bigNumber = 3456543576654356754n

console.log(typeof bigNumber);


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