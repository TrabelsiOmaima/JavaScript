

// 28- javascript Null type
// value # type 

// variable
let a;
console.log(a); // undefind
console.log(typeof a); // undefind

// reslt type : object / result value : null
let pattern = /xyz/ ;
let ch = 'this is just a test';
let result = ch.match(pattern);
console.log(result);  // null
console.log(typeof result); // object

if(result == null) {
    console.log('no match was found');
}

