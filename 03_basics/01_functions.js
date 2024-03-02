// functions

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("C");
    console.log("H");
}

sayMyName // reference
sayMyName() // execution

function addTwoNumbers(number1, number2) { // (number1, number2) perameter 
    console.log(number1 + number2);
}

addTwoNumbers() // NaN
addTwoNumbers(3, 4) // 7                   // (3, 4) arguments
addTwoNumbers(3, "4") // 34
addTwoNumbers(3, "a") // 3a
addTwoNumbers(3, null) // 3

function addMoreNumbers(number1, number2) { 
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addMoreNumbers(3, 4)

console.log("Result: ", result); // Result:  7

function loginUserMessage(username = "sam") {
    if(username === undefined) {
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()); // undefined just logged in
// console.log(loginUserMessage("Prince")); // Prince just logged in

function calculateCartPrice(...num1) {
    return num1
}

function calculateCartPriceOne(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(100, 200, 300, 400, 500)); // [ 100, 200, 300, 400, 500 ]
console.log(calculateCartPriceOne(100, 200, 300, 400, 500)); // [ 300, 400, 500 ]

const user = {
    username: "Prince",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`); 
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [ 200, 400, 100, 600 ]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(200, 600, 1000, 60));
console.log(returnSecondValue([200, 600, 1000, 60]));