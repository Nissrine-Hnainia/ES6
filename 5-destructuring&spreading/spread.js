/* The spread operator is the ... dots notation used to expand the elements of an iterable 
(arrays or objects). It allows to add new elements, copy an array/object concatenate arrays/objects */

// object
const user = {
  name: "Ahmed",
  age: 25,
};
let user1 = { ...user, id: 5, job: "student" };
console.log(user1);

const car1 = {
  type: "Sedan",
  name:"Mercedes benz A-Class",
}
const car2 = {
  transmission: "7-speed automatic",
  engine: "2.0-liter inline-4 turbocharged engine with 188 horsepower"
}

const car = { ...car1, ...car2}
console.log(car)

// array
const tab = [1, 3, 6, 9];
let tab1 = [...tab, 56, 8]; 
console.log(tab1);

const tab = [1, 3, 6, 9];
const t = [9, 6, 3, 5];
let tab1 = [...tab, ...t];
console.log(tab1);

const users = [{ name: "Nissrine" }, { name: "Asma" }];
const tt = [...users, { name: "Marwa" }];
console.log(tt);

const users = [{ name: "mohamed" }, { name: "salah" }];
const u = users.map((el, i) => {
  return { ...el, age: i };
});
console.log(u);

/* rest operator is the opposite of the spread, it collects many elements into one 
iterable(array)*/
const arr=[1, 5, 2006, 43, 78, 0];
const [a,b, ...rest] = arr
console.log(rest)
// function that adds the first element of the array to the rest of elements at each iteration
function add(addition, ...args) {
  return args.map(function(el) {
    return addition+el
  });
};

let arr = add(4, 89, 60, 32, 77)
console.log(arr)

