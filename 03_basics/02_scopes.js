var c = 300
let a = 100

if(true) {
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}

console.log(a);
// console.log(b);
console.log(c);

function one() {
    const username = "robert"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if (true) {
    const username = "robin"
    if (username === "robin") {
        const website = " youtube"
        // return username + website
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++ interesting ++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

const addTwo = function(num) {
    return num + 2
}
addTwo(5)
