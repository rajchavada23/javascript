// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Prince",
    "full name": "Prince king",
    mySym: "mykey1",
    [mySym]: "mykey2",
    age: 18,
    location: "Gujarat",
    email: "prince@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Saturday"],
}

console.log(jsUser.email); // prince@gmail.com
console.log(jsUser["name"]); // Prince
console.log(jsUser["full name"]); // Prince king
console.log(jsUser.mySym); // mykey1
console.log(typeof jsUser.mySym); // string
console.log(jsUser[mySym]); // mykey2

jsUser.email = "king@gmail.com"
// Object.freeze(jsUser);

// jsUser.email = "prince@microsoft.com"
console.log(jsUser);

// {
//   name: 'Prince',
//   'full name': 'Prince king',
//   mySym: 'mykey1',
//   age: 18,
//   location: 'Gujarat',
//   email: 'king@gmail.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Tuesday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey2'
// }

jsUser.greeting = function() {
    console.log("Hello JS user");
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()); // Hello JS user
console.log(jsUser.greetingTwo()); // Hello JS user, Prince