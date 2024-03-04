// if

const isUserLoggedIn = true
const temperature = 41

if (2 === 3) {
    console.log("2 is equale to 3");
} else {
    console.log("2 is not equale to 3");
}

if (3 !== 3) {
    console.log("3 is not equale to 3");
} else {
    console.log("3 is equale to 3");
}

if (temperature === 42) {
    console.log("less then 50");
} else {
    console.log("temperature is grater then 50");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

score > 100 ? console.log('asdas') : 
score  < 500 ? console.log("adas") : console.log("adas"); 

if (score > 100) {
    let power = "fly"
    // var power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

balance < 500 ? console.log("less then 500") : 
balance < 750 ? console.log("less then 750") : 
balance < 900 ? console.log("less then 900") : console.log("less then 1200");

if (balance < 500) {
    console.log("less then 500");
} else if (balance < 750) {
    console.log("less then 750");
} else if (balance < 900) {
    console.log("less then 900");
} else {
    console.log("less then 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}