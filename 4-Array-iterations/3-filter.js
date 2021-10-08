// filtrer les éléments d'indice paire
let numbers = [1, 2, 3, 5];

let x = numbers.filter((el, i) => !(i % 2));
console.log(x);

// filtrer name <=5

let users = [{ name: "mohamed" }, { name: "ali" }, { name: "salah" }];
let y = users.filter((el) => el.name.length <= 5);
console.log(y);
