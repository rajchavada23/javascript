// for

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`${element} is a best number`);
    }
    console.log(element);
}

// Tables

for (let i = 1; i <= 10; i++) {
    console.log(`Table No.: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop: ${i}`);
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

let myArr = ["flash", "batman", "superman"]
console.log(myArr.length); // 3

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element); 
}

// break and continue

console.log(`""  break loop  ""`);
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
}

console.log(`""  continue loop  ""`);
for (let index = 0; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}