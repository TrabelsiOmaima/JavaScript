


let tab = [9,  'emma', true];
let tab2 = [9,  'emma', true]; 

console.log( tab[0]); // 9
console.log(tab); // [9  'emma'  true]

tab[0]=5;
console.log( tab[0]); // 5

console.log( typeof tab); // object

//index not existe
console.log(tab[10]);  //undefined

//number element
console.log(tab.length);   //3

//add elemnt , any index
tab [15]='hi';
console.log(tab);   // [ 5, 'emma', true, <12 empty items>, 'hi' ]
console.log(tab.length);   //16

//add element queue 
tab2.push('hi');
console.log(tab2);   // [ 5, 'emma', true, 'hi' ]
console.log(tab2.length);   //4


// remove from queue 
tab2.pop();
tab2.pop();
console.log(tab2);   // [ 5, 'emma']
console.log(tab2.length);   //2