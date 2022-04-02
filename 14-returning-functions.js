
/* never write a code in the global scope  !!!! BIG PROBLEM

var myVariables = 'I am at the global scope';

 var myFnction = function() {
     console.log('me too !');  
 }
------- SOLUTION !!
 to avoid write the code in the global scope ==> javascript functions work :
  ==> we return a function from a function 
*/





 //-------------------------- Pointeur sur fnct declarer 
function one() {
     return 'i am fnct one' ;
 }
 console.log(one());   //i am fnct one

//or 
 let varExecutionFnct = one();  // () exécution when we invoke it
 console.log(varExecutionFnct ); //  i am fnct one 
 console.log(typeof varExecutionFnct );  // string //type fl return

//or
 let varReferenceFnct = one ;   // ref, pointeur sur  fnct one
 console.log(varReferenceFnct);  // [Function: one]  
 console.log(varReferenceFnct());  // i am fnct one  = exécution 
 console.log(typeof varReferenceFnct );  //function  : datatype 

  


// ....................... function return a function expression:
function two() {
    return function() { console.log(' i am function two'); }
}


let myfunction = two();  
//myfunction  : reference et nn ps simple var malgré hia exéction () : 5atr typre f return = function
// two() , () obligatoire (cuz return type : function) sin ca marche ps , not like fct one ( return type string)
console.log(typeof myfunction );  // function
myfunction ();


//double exécution : 
console.log(two()());   // funct()()

function three() {
    return function(){  return 'three' ; }
}

console.log(three()()); //1st () to exécute funct three , 2nd () to exécute express fnct

