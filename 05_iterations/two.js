let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

// tables

let table = 1
while (table <= 10) {
    console.log(`Table is ${table}`);
    let j = 1
    while (j <= 10) {
        console.log(`${table} * ${j} = ${table * j}`);
        j++
    }
    table++
}

let myArr = ["flash", "batman", "superman"]
console.log(myArr.length); // 3

let arr = 0
while (arr < myArr.length) {
    let element = myArr[arr]
    console.log(element);
    arr++
}

let secArr = 0
while (secArr < myArr.length) {
    console.log(`Value is ${myArr[secArr]}`);
    secArr++
}

let score = 1

do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);