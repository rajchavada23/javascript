const myObj = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObj) {
    console.log(key);
}

// Ans is

// js
// cpp
// rb
// swift

for (const key in myObj) {
    console.log(myObj[key]);
}

// Ans is

// Javascript
// C++
// Ruby
// Swift by apple

for (const key in myObj) {
    console.log(`${key} : ${myObj[key]}`);
}

// Ans is

// js : Javascript
// cpp : C++
// rb : Ruby
// swift : Swift by apple

const programming = ["js", "cpp", "rb", "java"]

for (const key in programming) {
    console.log(`${key} : ${programming[key]}`);
}

// Ans is

// 0 : js
// 1 : cpp
// 2 : rb
// 3 : java