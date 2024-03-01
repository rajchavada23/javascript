// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'Sam', isLoggedIn: false }

const regularUser = {
    email: "person@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prince",
            lastname: "King",
        }
    }
}

console.log(regularUser); // { email: 'person@gmail.com', fullname: { userfullname: { firstname: 'Prince', lastname: 'King' } } }
console.log(regularUser.fullname); // { userfullname: { firstname: 'Prince', lastname: 'King' } }
console.log(regularUser.fullname.userfullname); // { firstname: 'Prince', lastname: 'King' }
console.log(regularUser.fullname.userfullname.firstname); // Prince

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }
const obj4 = Object.assign({}, obj1, obj2)
const obj5 = { ...obj1, ...obj2 }

console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    },
]

console.log(users[1].email); // user2@gmail.com

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// ---------------------------------------------------------------------------------------------------------------

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
const {courseInstructor: instructor} = course // de-structure

console.log(courseInstructor); // hitesh
console.log(instructor); // hitesh

// JASON

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]