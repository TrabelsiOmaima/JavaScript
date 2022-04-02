


//----------- exmpl 1 : destructuring one by one
let a, b, c, e, d;

let names = [ 'david', 'eddie', 'alex', 'michael', 'sammy'];

[a, d, c, e, b] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);



// ------------exmpl 2 : destructuring one by one and into grps   ...

let others;

[x, y, ...others] = names;

console.log(x);
console.log(y);
console.log(others);  //[ 'alex', 'michael', 'sammy' ]



// ----------- exmpl 3 : destructuring for an object

let year, model;
/*
let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    value: 5000
}
*/

({year,model} = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    value: 5000
});

console.log(year);
console.log(model);