
# Basics of JavaScript Syntax : 

        + variables : 4

        + Data types : 5

        + Type conversation : 6

        + Expressions and operators : 7

        + Arrays : 8 

        + Decision statements : 11  
                - if..else
                - switch
                - short form if : () ? ... : .....


        + Iteration statements : 12
                -for
                -while


        + this : 18
                - this = context (global, car(object), ...)
                - the call side   --global, object,(js) window(html), ....etc


        + Truthy and falsy values : 27
                - cases falsy and truthy , based on JavaScript rules


        + Null type : 28
                - JavaScript Null type
                - value # type 


        + Date : 29
                - date object


        + String Methods : 30
                -  string : building natives = objects, has methods…


        + Array Methods : 31
                - add, delete, reverse, index,...


        + Error handling : 32
                - JavaScript : mat5arrajch barcha errors..  5ayeb 5atr ta3rach win 8alet w kifech tsalla7.
                - with try..catch ==> l'application still running + ta3raf l'error : error. message
                - "finally"  : this will happen no matter what.




# Functions :

        + Function Declaration : 9   
                function sayHello() {
                console.log(' Hello maima ^^ ');
                }   
                sayHello();


        + Function Expressions : 10   
                - Immediately Invoked Function Expression (IIFE) 
                (function () { console.log('Immediately Invoked Function Expression (IIFE) '); }) ();


        + returning functions form Functions : 14    
                - return (function () { })

        + arrow functions : 26 
                - short form :
                let hi = () => {console.log('hi bob ')  };  hi();
                names.map( (name) => {i++; console.log(` ${i} : howdy ${name} ! `)} ); 







# Object :

        + Built in Natives Type  : 22
                -list of builds how have  primitive version :  
                        String()
                        Number()
                        Boolean()
                        Object()
                        Function()
                        Symbol()
                        Date()
                        Error()

                - list of builds how don't have  primitive version :  cuz : (primitive version =object)
                        Array()
                        RegExp()

                
                

        + constructor function : 23
                -  in JS, we can use "new" with any normal function ( 1st letter min or maj)
                -  let myFunction = new myFunctionn();  typeof myFunction;  //object
                -  myFunction();  // Error : TypeError: myFunction is not a function
                => Can't really do anything with this particular Object 
                ---
                -  constructor function :  to construct an object
                -  ps : function fist letter Should be Maj
                -  not a constructor, like other language (mm concept but pour un object not for a class !)




        + Prototype chain : 24
                - is the fact to create a new object from an existing object 
                - this fact create a "primordial link" between the old and the new object
                - the old object is a : "prototype" for the new object
                - the new object "chain to" the "prototype" ( the old object)
                - "JavaScript prototype inherits" = notion heritage fl les objets :  pas tellement just so  => stay away
                - true sentence : "objects linking to others objects"







# Classes :

        + Classes : 25
                - JavaScript technically don't have the notion of "classes"
                - JS give u the impression that classes works , but in  realty nothing has changed
                -  classes = feature of JavaScript 
                - actually /really: "object base prototypes inherits"
                - function declaration , function expression  => class declaration , class expression





# Tips javascripts :

        + Basics of scope : 13
                - scope = bloc de code limited by {  }
                - "lexical scoping" uses the location where the variable is declared : so where the variable is available
                - invoke from outside the scope into inside the scope .. ça marche
                - invoke from inside the scope into outside the scope .. Error


        + Object Literals : 15
                - normal object ..


        + Module Pattern , Revealing Module Pattern : 16
                1. Create a "basically module pattern" : 
                        - create a module ( var counter) "essentiellement c'ast un IIFE" 
                        - qui return an object , that expose functions and properties (private stuff  let)

                2. Revealing Module Pattern : 
                -  another form of module pattern (revolution of )(more pro)



        + Closures  : 17
                - (marriage) a function to a data = team = work together
                - each call ll function b data diff .. Give a new closure
                - each closure create a zone was called "lexical environment" = declaration and use


        + JavaScript Destructuring : 19
                - destructuring elem of tab into variables 
                - one by one
                - into groups   ...
                - destructuring for an object


        + String Template Literals : 20
                ` ............ ${nonVariable | expression}........  `


        + Regular Expressions regex : 21
                let pattern = /xyz/


        + DOM : 33 
                - rendering the web page out
                - techniques : associate your JavaScript to a web page (HTML)










