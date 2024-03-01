// Array

const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
console.log(myArr[1]); // 1

// Array method (add & delete)
myArr.push(6, 7); // add
myArr.pop(); // delete

myArr.unshift(9); // add in start
myArr.shift(); // delete in start

console.log(myArr.includes(5)); // true
console.log(myArr.includes(9)); // flase
console.log(myArr.indexOf(4)); // 4
console.log(myArr.indexOf(9)); // -1

console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6 ]

const newArr = myArr.join() // creates and returns a new string

console.log(newArr); // 0,1,2,3,4,5,6
console.log(typeof newArr); // string

// slice, splice

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5, 6 ]

const myn1 = myArr.slice(1, 3);
console.log(myn1); // [ 1, 2 ]

console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5, 6 ]

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); // C  [ 0, 4, 5, 6 ]
console.log(myn2); // [ 1, 2, 3 ]