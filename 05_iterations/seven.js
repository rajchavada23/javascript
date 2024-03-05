// map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNumbers.map((num) => { return num + 10 })

console.log(newNum); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const newEachNum = []

myNumbers.forEach((num) => {
    if (num) {
        newEachNum.push(num + 10)
    }
})

console.log(newEachNum); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const newFunNum = myNumbers.map((num) => num * 10)
                            .map((num) => num + 1)
                            .filter((num) => num >= 40)

console.log(newFunNum); // [ 41, 51,  61, 71, 81, 91, 101 ]
