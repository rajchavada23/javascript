const user = {
    username: "Robert",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this); // reference
    }
}

user.welcomeMessage()
user.username = "Peter"
user.welcomeMessage()

console.log(this); // {}

function functionOne() {
    let username = "steave"
    console.log(this.username); // undefined
}

functionOne()

const functionTwo = function() {
    let username = "RDJ"
    console.log(this.username); // undefined
}

functionTwo()

const functionThree = () => {
    let username = "RDJ"
    console.log(this.username); // undefined
    console.log(this); // {}
}

functionThree()

// Arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4)); // 7

// ---------------------------------------------------------------------

const functionInOneLine = (num1, num2) => num1 + num2

console.log(functionInOneLine(3, 4)); // 7

// ---------------------------------------------------------------------

const functionInLine = (num1, num2) => (num1 + num2)

console.log(functionInLine(3, 4)); // 7

// ---------------------------------------------------------------------

const objectFunction = (num1, num2) => {username: "RDJ"}

console.log(objectFunction(3, 4)); // undefined

// ---------------------------------------------------------------------

const returnObjectFunction = (num1, num2) => ({username: "RDJ"})

console.log(returnObjectFunction(3, 4)); // {username: "RDJ"}

// ---------------------------------------------------------------------

const newArr = [2, 4, 6, 8, 10]

newArr.forEach(() => {})