


/* 29- javascript date objects

 -------  functions :
bob.getMonth();
bob.getDay();

bob.getHours();
bob.getMinutes();
bob.getSeconds();
bob.getMilliseconds();

--------- form date :
let b = new Date('1969-12-07T07:01:23');
let boob = new Date(1969, 11, 6);
let booob = new Date(1969, 11, 6, 7, 1,23);

*/

let today = new Date();
console.log(today);

let bob = new Date('December 7, 1969 07:01:23');


// millisecond entre thistime and oher time
var elapsedtime = today - bob;
console.log(elapsedtime);

//get part from date
console.log(bob.getDate()); // 7 //sunday
console.log(bob.getTime());  //-2138317000


