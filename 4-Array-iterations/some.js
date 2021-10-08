// La méthode some() teste si au moins un élément du tableau passe le test
let fruits = ["tomate", "apple", "kiwi"];
let x = fruits.some((el) => el.length !== 5);
console.log(x);
