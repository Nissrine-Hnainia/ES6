// var, let & const
function boucle() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i);
}
boucle();

// remplacer var par let
function boucle() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i);
}
boucle();

/* Constant mutability */

/* const does not define a constant value, but rather defines a constant reference to the
value. That is why we can nt change constant primitive values, but we can change the 
properties of constant objects */
const str = 'hi';
str = 'hello';

const arr = ['one', 'two', 'three'];
arr.push('four')
console.log(arr)

const obj = {
  fullName: 'John Doe',
  nickName: 'Johnny'
}
console.log(obj)
obj.nickName = 'jon'
console.log(obj)

