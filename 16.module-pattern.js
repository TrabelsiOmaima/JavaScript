
/* 
+ definng fnct and variable in the global scope = dangereuse : 
    Cuz : 
        - each variable create in the global scope reste in computure memory until
          the tab of the web browser navigate in anothr page

        - when u add another morceau of code from another sorce ==> "colusuion of names" "NAMING COLLUSION" 
          have the same name in the two file (in the global scope )


    Slt : 

        - 1. use "let" key work instead of "var"
            cuz :
            var touch variables to the global scope 

        - 2. use the technique of "the designs patterns"    !! THIS LESSON

        - 3.  modules

*/


//----------------------------------------

/*
    "the design pattern"  use 2 technoques :

        1. IIFE  (Immediately Invoked Function Expression)
            craete a fnct .. that fnct return an object .. that object  have define
            fncts and variabels (scoped to one variable)
            => one variable in the global scope(or in same scope)
            and the reste of the variables (elli wstou ) are privete to this scope (unvailable outside the scope)

        2. 
*/


//create an IIFE :
//an ampty one
        (function(){

        })();


/*here we go : create a "basically module pattern" =
create a module ( var counter) "essentiellement c'ast un IIFE" 
qui return an object , that expose functions and properties (private stuff)
prblm of "Accedentally created a "closure"" .. slt get w set"

*/
// ----------------   a "basically module pattern"  :  counter

            var counter = (function(){

                    //private stuff (unavailable outside this scope)
                    let count = 0 ;

                    function print(message) { 
                        console.log(message + '---' + count) ;
                    }


                    // return an object
                    return {

                        //value: count,
                        get: function() { return count;},
                        set: function(value) { count = value; },

                        increment: function() {
                            count += 1;
                            print('after increment: ');
                        },

                        reset: function() {
                            print('before reset: ');
                            count = 0; 
                            print('after reset: ');
                        }
                    }
            })();



console.log( counter.count); //undefined , cuz privete property
//console.log( counter.value); //0   // 9bal mana77i l value w n3awadhha b get w set

counter.increment(); //after increment: ---1
counter.increment();  //after increment: ---2
counter.increment();  //after increment: ---3


// Accedentally created a "closure"
//console.log( counter.value); // 0  !!!  nrmlnt 3 !!!!
//slt : get w set 
counter.set(7);  
console.log(counter.get());   //7


counter.reset();  //before reset: ---3
                  //after reset: ---0



