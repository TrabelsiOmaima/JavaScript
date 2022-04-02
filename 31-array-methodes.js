 
 
 let names = [ 'david', 'eddie', 'alex', 'michael'];
 let others = [ 'sammy', 'gary', 'wolfgang','marks' ];

 let lost = [4, 8, 15, 16, 23, 42];
 let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];


 //------- functions : 

var combine = lost.concat(fibonacci);
console.log(combine);

console.log(fibonacci.join('~'));

// add , supp 
console.log(lost.pop());
console.log(lost);

console.log(lost.shift());
console.log(lost);

console.log(lost.push(19));
console.log(lost);

console.log(lost.unshift(7));
console.log(lost);

// reverse
console.log(names);
console.log(names.reverse());
console.log(names.sort()); 

// index
console.log(others.indexOf('marks'));

console.log(combine);
console.log(combine.lastIndexOf(1 ));


// map.. filter
console.log(combine);
var filtered = combine.filter( (x) => { if (x <= 15) return x;  });
console.log(filtered);

//forEach
names.forEach( (name) => console.log(`howdy ${name}`) );

// every
console.log(filtered.every( (num) => num < 10 ));
console.log(filtered.every( (num) => num < 16 ));

//some
console.log( fibonacci.some ( (nb) => nb > 50 ));
console.log( fibonacci.some( (n) => n > 100 ));

