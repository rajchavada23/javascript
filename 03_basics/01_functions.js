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