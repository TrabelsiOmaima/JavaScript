


/*
        + this = conext ( global, car, ...)
        + the "this" keyword in javascript represent :  ""the way of function is called"""
        "how you called a function"


    - This how and how called : 
    - how a giving function is called  bouind to 
    - how  the call side -- glabel, object, window, ....etc

*/

 
let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() { 
        return 5000; 
    } ,
    printDescreption: function() { 
        console.log( this.make+ ' ' + this.model ); //this = car
    }
}

//--------------------------------------------------------------------------------
// expl of bound of this
function first() {
    return this;
}

//  global : global object insode of node : basic context
//global howa l window fl web ~~

console.log(first() === global);  //true

/* This is Node's global object
because that's where the 'fist method' was called
*/


// 2ém exmpl : 'use strict';

function second() {
    'use strict';
    return this;
}

console.log(second() === global);  //false
console.log(second() === undefined);  //true




 
//3 em expl 
// 'This' dependes on HOW a function is called.   !!!!!!!!
// An object can be passed as the first argument to call or apply and this will be bound to it. 

let myObject = { value: 'My object'};

// This property  is set on the global object
global.value = 'Global object';

function third(name) {
    // Returns something diffrent depending on how we call this method :
    return this.value + name; //global.value
}

console.log(third());   //Global object   cuz we call third() , from the global name space 
// other way to invoke third(), with control the buinding of 'this' keyword
//buind the 'this.value' to muObject

/* Both call and apply allow you to explicity set
what you want to represent 'thsi'. 
the diffrence is in how additional arguments to the function are sent.
*/

console.log(third.call(myObject, 'bob'));   //My objectbob
console.log(third.apply(myObject, ['bob']));   //My objectbob 
//apply = call, just apply : multiple params , call one param


//------------- interrested example

function fifth() {
    console.log(this.fistName+ ' ' + this.lastName);
}

let customer1 = {
    fistName: 'bob',
    lastName: 'tabor',
    print: fifth
}

let customer2 = {
    fistName: 'richard',
    lastName: 'boughton',
    print: fifth
}

//context of 'this' fl apl fifth fl prnt(): customer1 and customer2
customer2.print();
customer1.print();




