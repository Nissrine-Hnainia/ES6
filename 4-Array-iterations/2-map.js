//map method creates new array containing the elements after modification

let names = ["mohamed", "ali", "salah"];

const capital = names.map((el) => el.toUpperCase());
console.log(capital);

// other exemple
let numbers = [1, 2, 3, 5];
//  chaque element du tableau =>> {key: value} ==> {num: element du tab}
let x = numbers.map((el) => {
  return el*2;
});
console.log(x);

// les elements d'indice impaires du tableau 
let numbers = [1, 2, 3, 5];

let x = numbers.map((el, i) => {
  return i % 2 ? "indice impair" : "";
});
console.log(x);

// les elements d'indice paires du tableau 
let numbers = [1, 2, 3, 5];

let x = numbers.map((el, i) => {
  return !(i % 2) ? "indice pair" : "";
});
console.log(x);
