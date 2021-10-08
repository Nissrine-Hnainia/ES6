//task
// if   else
let test = (n) => {
  if (n < 18) {
    return "adol";
  } else return "adult";
};
console.log(test(5));

//ternary operator
let test1 = (n) => n < 18 ? "adol" : "adult"
console.log(test1(5));

//if      elseif   else
let test = (n) => {
  if (n < 18) {
    return "adol";
  } else if (n < 35) return "jeune";
  else return "adult";
};
console.log(test(25))

//ternary operator
let test1 = (n) => n < 18 ? "adol" : n < 35 ? "jeune" : "adult";
console.log(test1(25));
