const coding = ["js", "ruby", "java", "python", "cpp"]

// function

coding.forEach(function (value) {
    console.log(value);
})

// js
// ruby
// java
// python
// cpp

// Arrow function

coding.forEach((item) => {
    console.log(item);
})

// js
// ruby
// java
// python
// cpp

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

// js
// ruby
// java
// python
// cpp

coding.forEach((item, index, array) => {
    console.log(item, index, array);
})

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding = [
    {
        languageName: "Javascript",
        languageNameFile: "JS"
    },
    {
        languageName: "Java",
        languageNameFile: "Java"
    },
    {
        languageName: "Python",
        languageNameFile: "PY"
    },
]

myCoding.forEach((item) => {
    console.log(item);
})

// { languageName: 'Javascript', languageNameFile: 'JS' }
// { languageName: 'Java', languageNameFile: 'Java' }
// { languageName: 'Python', languageNameFile: 'PY' }

myCoding.forEach((item) => {
    console.log(item.languageName);
})

// Javascript
// Java
// Python