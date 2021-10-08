//reduce array to one value by substarction
let numbers = [1, 2, 3, 5];

let x = numbers.reduce((acc, cur) => acc - cur,10);
console.log(x);
//10-1-2-3-5
let numbers = [1, 2, 3, 5];

let x = numbers.reduce((acc, cur) => acc - cur);
console.log(x);
//1-2-3-5

//reduce table to one string by concatenation
let users = [{ name: "mohamed" }, { name: "ali" }, { name: "salah" }];

let x = users.reduce((acc, current) => acc + current.name, "");
console.log(x);
//reduce using template literals
let users = [{ name: "mohamed" }, { name: "ali" }, { name: "salah" }];

let x = users.reduce((acc, current) => `${acc} ${current.name}`, "sabri");
console.log(x);
