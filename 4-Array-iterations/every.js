// La méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée

let fruits = ["tomato", "apple", "kiwi"];
let x = fruits.every( (el) => el.length !== 5 );
console.log(x);
