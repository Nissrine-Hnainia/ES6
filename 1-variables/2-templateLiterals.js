let str = "Nissrine";
let age = 28;
let address = {
  city: "Ariana ville",
  cp: 2080,
};
let string =
  "my name is " +
  str +
  " and my age is " +
  age +
  " and I live in " +
  address.city;
console.log(string);

// use template literals
let strin = `my name is ${str}and my age is ${age} and I live in ${address.city}`;
console.log(strin);
