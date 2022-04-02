
let a = 'first';
/* 
   + scope = bloc de code limité par {  }
   + "lexical scoping" uses the location where the variable is declare : so where the variable is available
   + invoke from outside the scope into inside the scope .. ça marche
   + invoke from inside the scope into outside the scope .. Error

*/


function scopeTest() {     //scope 1

    console.log(a);
    let v = 'first';


    if(a!= '') {          //scope 2
        console.log(a);
        console.log(v);
   // let c = 'second';     : declare c inside the scope n 2

    }
   // console.log(c);   try to use c from inside the scope 2 to outside the scope 1 , error
   //ReferenceError: c is not defined 

   // let b = 'second';     : declare b inside the scope
}

scopeTest();

//console.log(b);    try to use b from inside the scope to outside the scope , error
//ReferenceError: b is not defined 