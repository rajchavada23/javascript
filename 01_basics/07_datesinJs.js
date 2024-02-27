// Dates

let myDates = new Date()

console.log(myDates); // 2024-02-27T06:31:56.502Z
console.log(typeof myDates); // object
console.log(myDates.toString()); // Tue Feb 27 2024 06:31:56 GMT+0000 (Coordinated Universal Time)
console.log(myDates.toDateString()); // Tue Feb 27 2024
console.log(myDates.toLocaleString()); // 2/27/2024, 6:31:56 AM
console.log(myDates.toISOString()); // 2024-02-27T06:31:56.502Z
console.log(myDates.toJSON()); // 2024-02-27T06:31:56.502Z
console.log(myDates.toLocaleDateString()); // 2/27/2024
console.log(myDates.toLocaleTimeString()); // 6:31:56 AM
console.log(myDates.toTimeString()); // 06:31:56 GMT+0000 (Coordinated Universal Time)
console.log(myDates.toUTCString()); // Tue, 27 Feb 2024 06:31:56 GMT
console.log(myDates.getTimezoneOffset()); // 0

let myCreatedDate = new Date(2024, 1, 27)
console.log(myCreatedDate.toDateString()); // Tue Feb 27 2024

let myCreatedDate1 = new Date(2024, 1, 27, 12, 16)
console.log(myCreatedDate1.toLocaleString()); // 2/27/2024, 12:16:00 PM

let myCreatedDate2 = new Date("2024-02-27")
console.log(myCreatedDate2.toLocaleString()); // 2/27/2024, 12:00:00 AM

let myCreatedDate3 = new Date("02-27-2024")
console.log(myCreatedDate3.toLocaleString()); // 2/27/2024, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1709022699744 (miliseconds)
console.log(myCreatedDate.getTime()); // 1708992000000
console.log(Math.floor(Date.now()/1000)); // 1709022699

let newDate = new Date()
console.log(newDate); // 2024-02-27T08:31:39.744Z
console.log(newDate.getMonth()); // 1
console.log(newDate.getMonth() + 1); // 2
console.log(newDate.getDay()); // 2

// newDate.toLocaleString('default', {
//     weekday: "long"
// })