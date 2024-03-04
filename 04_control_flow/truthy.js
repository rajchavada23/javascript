const userEmail = "rdj@gmail.com"

if (userEmail) {
    console.log("Got an useremail");
} else {
    console.log("Don't have user email");
}

const emptyUserEmail = ""

emptyUserEmail ? console.log("Got an useremail") : console.log("Don't have user email");

const emptyArrUserEmail = []

emptyArrUserEmail ? console.log("Got an useremail") : console.log("Don't have user email");

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

emptyArrUserEmail.length === 0 ? console.log("Array is empty") : console.log("Array is not an empty");

const emptyObj = {}

Object.keys(emptyObj).length === 0 ? console.log("Object is empty") : console.log("Object is not an empty");

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1, val2, val3, val4;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1, val2, val3, val4); // 5 10 15 10

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");