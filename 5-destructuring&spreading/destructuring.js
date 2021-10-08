/* Destructuring */
// The destructuring is a JS syntax that came with es6, used to extract data from arrays 
//and objects into distinct variables.

//destructuting objects
const obj = {fullName: "Nissrine", age: 5, date: 7};
console.log(obj.fullName) // Nissrine

const {fullName, age, date} = obj
console.log(fullName) // Nissrine

const {fullName:n, age:a} = obj
console.log(n)
console.log(a) 

//destructuring nested objects
const person = {
    appearance: {height: 162, weight: 50, eyeColor: "brown"},
    qualities: {intelligence: "fast learner", work: "hard worker"}
}

const { appearance: { height: h, weight: w, eyeColor:ec}} = person;
console.log(h)
console.log(w)
console.log(ec)

//another example
const obj = {
    fullName: "Nissrine", //property: key-value
    age: 5, 
    date: 7,
    hobbies: {
      sports:["tennis", "jogging"],
      music: "piano"
    }
    };
    console.log(obj.hobbies.sports)
    const {hobbies:{sports:s, music:m}} = obj
    console.log(s, m)

//Destructuring arrays
const arr=[1, 5, 78, 0];
const [a, b] = arr
console.log(a)
console.log(b)

const [a,,, b] = arr
console.log(b)
//could be done with rest operator too

//Destructuring nested array
const arr=[1, 5, 78, 0, [46, 2]];
const [,,,,[b]] = arr
console.log(b)