let a=7;
let b = '6';
let c = a+b;
console.log(c);   // 76     type : string 



c= a+ parseInt(b,10);
console.log(c);   //  13     type ; integer


d= parseInt('hi', 10);
console.log(d);      // NaN  
console.log( isNaN(d));   //true