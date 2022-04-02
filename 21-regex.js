// 21 . java script regular expressions


let pattern = /xyz/ ;
console.log(pattern); //   /xyz/ 
console.log(typeof pattern); //  object


let value = 'this isxyz a test';

console.log(pattern.test(value)); //true

console.log(value.replace(pattern, 'just')); //this isjust a test

console.log(value.match(pattern)); //info 3al pattern , mais en tq chaine de caractere simple
match = value.match(pattern);
console.log (match.index); //7

