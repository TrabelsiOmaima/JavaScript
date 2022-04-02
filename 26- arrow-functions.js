// 26 : arrow functions = short form to a function 


// simple exmple :
let hi = () => {console.log('hi bob ')  };
hi();


// exempl with params :
let hii = (name) => {console.log(`hi ${name }`) };
hii('bob');

// with "return"
let add = (a,b) => { return a+b } ;
console.log(add(7,13)); 


// -- liste.map ( arrow-function )  namesss.map(name)
let names = ['david', 'eddie', 'alex', 'michael'];
names.map( (name) => {console.log(`howdy ${name} ! `)} );
// flexible
let i=0;
names.map( (name) => {i++; console.log(` ${i} : howdy ${name} ! `)} );
// destructtering flexibility
var transformed = names.map( (name) => { return `howdy ${name} ! `} );
console.log(transformed);
