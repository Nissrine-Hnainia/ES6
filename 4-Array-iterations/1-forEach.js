// forEach : comme for :
let names = ['mohamed', 'ali', 'amine'];
let capNames =[];
const capital = names.forEach( el => {
  // let x = el.toUpperCase();
  capNames.push(el.toUpperCase())
}  )
console.log(capNames)

//es5 syntaxe
// let capNames =[];
// for (let i=0; i<names.length; i++) {
//   let x= names[i].toUpperCase()
//   capNames.push(x)
// }
// console.log(capNames)

//arr.forEach() ==>
