

/*
29 : javascript : String Methods
    string : builting natives 
*/

//--- call method on string literals :
console.log('bob loves you'.toUpperCase());



let first = 'knowledge is power but enthusiasm pulls the switch.';
let second = 'Do or do not. There is no try.';
let third = '4,8,15,16,23,42';

//------- functions :

let mySplit = third.split(',');
console.log(mySplit);

let mySlice = first.slice(13,18);
console.log(mySlice);

let mySubstr = first.substr(13,5); 
console.log(mySubstr);

let myEndsWith  =second.endsWith('try.');
console.log(myEndsWith);

let myStartsWith = second.startsWith('Do');
console.log(myStartsWith);

let myInclude = second.includes('There');
console.log(myInclude);


//----- others

let myRepeat = 'Ha!'.repeat(3);
console.log(myRepeat);

let myTrim = '    bloated     ';
console.log(myTrim.length);
console.log(myTrim.trim().length);

