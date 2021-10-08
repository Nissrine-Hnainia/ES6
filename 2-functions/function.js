//ES5 
function add(x, y) {
  return x + y;
}

console.log(add(1, 2));

//ES6: arrow function (new syntax)

const addition = (x, y) => {
  return x + y;
};
//    on peut simplifier lorsqu'on a un seul traitement
const adding = (x, y) => x + y;
console.log(add1(1, 2));

//Looping an array to multiply each element using ES5
function mapping() {
  var tab = [1, 2, 15, 780, 1000];
  var arr = [];
  for (var i=0; i< tab.length ; i++) {
    arr[i] = tab[i]*2;
  }
  return(arr)
}
console.log(mapping());

//mapping with ES6
let array = [1, 2, 15, 780, 1000]
console.log(array.map(x => x*2));
console.log(array)

// Task:
// we need the sum of the ages of the people
// between 25 and 30 and their name is Ahmed
let people = [
  { name: 'Ahmed', age: 27 },
  { name: 'Ahmed', age: 22 },
  { name: 'Aly', age: 29 },
  { name: 'Ahmed', age: 28 },
  { name: 'Mohamed', age: 35 },
];

//function expression version
const sumAge = people
.filter(function(person) {
  return person.age > 25 && person.age < 30;
})
.filter(function(person) {
  return person.name === 'Ahmed';
})
.map(function(person) {
  return person.age
})
.reduce(function(acc, curr) {
  return acc+curr;
});
console.log(sumAge);

//ES6 version
const ageSum = people
.filter((person) => person.age > 25 && person.age < 30 && person.name === "Ahmed")
.map((person) => person.age)
.reduce((acc, curr) => acc+curr)
console.log(ageSum);

