
# Basics JavaScript Syntax : 3

+ variables : 4

+ Data types : 5

+ Type conversasion : 6

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
        - this = conext ( global, car(object), ...)
        - This how and how called : 
            - how a giving function is called  bouind to 
            - how  the call side -- glabel, object, window, ....etc

+ Truethy and falsy values : 27
        - cases falsy and truthy , based on javascripts rules

+ Null type : 28
        - javascript Null type
        - value # type 

+ Date : 29
        - date objects 

+ String Methods : 30
        -  string : builting natives = an objects, has methodes..

+ Array Methods : 31
        - add, supp, reverse, index,...

+ Error handling : 32
        - javascript : mat5arrajch barcha errors..  5ayeb 5atr ta3rach win 8alet w kifech tsalla7 fi cases !
        - with try..catch ==> l'appliaction still running + ta3raf l'erreur : error.message
        - "finally"{ console.log('this will happen no matter what.);}



# Functions :

+ Function Declaration : 9   
        function sayHello() {
         console.log(' Hello maima ^^ ');
        }   
        sayHello();


+ Function Expressions : 10   
        - Immediately Invoked Function Expression (IIFE) 
        (function () { console.log('Immediately Invoked Function Expression (IIFE) '); }) ();


+ reterning functions form Functions : 14     QST ( chda55al l returning function fl scope astuce !)
        - return a function from another function

+ arrow functions : 26 
        - short form to a function 
         let hi = () => {console.log('hi bob ')  };  hi();
         names.map( (name) => {i++; console.log(` ${i} : howdy ${name} ! `)} ); 





# Object :

+ Built in Natives Type  : 22
        -liste of builts how have  primitive version :  
            String()
            Number()
            Boolean()
            Object()
            Function()
            Symbol()
            Date()
            Error()

        - liste of builts how don't have  primitive version :  cuz : (primitive version =object)
            Array()
            RegExp()

        

+ constructor function : 23
        -  in js we can use "new" with any nrml function ( 1st letter min or maj)
        -  let myFunction = new myFunctionn();  typeof myFunction;  //object
        -  myFunction();  // Error : TypeError: myFunction is not a function
        => Can't really do anything with this particular Object 
        ---
        -  constructor function :  to construct an object
        -  ps : function fist letter Maj
        -  not a constructor, like other language (mm concept mais pour un object not for a class !)


+ Prototype chain : 24
       - is the fact to create a new object from an exesting object 
       - this fact create a "priminal link" between the old and the new object
       - the old object is a : "prototype" for the new object
       - the new object "chaine to" the "prtotype" ( teh old obejct)
       - "java script prototype inheretns" ~heritage :  pas tellement juste so stay away
       - true sentense : "objects linking to others objects"





# Classes :

+ Classes : 25
        - javascript technicly dont has the notion of "classes"
        - js give u the impression that classes works , but in  realty nothing has changed
        - feature of javascript : classes
        - actuly /realy: "object base prototypes inheretns"
        - "syntactic suger" = javascript classes
        - function declaration , function expression  => classe declaration , classes expression



# Tips javascripts :

+ Basics of scope : 13
    - scope = bloc de code limité par {  }
    - "lexical scoping" uses the location where the variable is declare : so where the variable is available
    - invoke from outside the scope into inside the scope .. ça marche
    - invoke from inside the scope into outside the scope .. Error


+ Object Literals : 15
        - normal object ..

+ Module Pattern , Revealing Module Pattern : 16
       1. create a "basically module pattern" : 
        - create a module ( var counter) "essentiellement c'ast un IIFE" 
        - qui return an object , that expose functions and properties (private stuff  let)

      2.Revealing Module Pattern : 
      -  another form of module pattern (revolution of )(more pro)



+ Closures  : 17
        - (mariage) a fnct to a data = team = work together
        - kol apl ll fnct b data diff .. donne un nv closure
        - each closure create a zone was called "lexical envirement" = decraration and use


+ javaScript Destructuring : 19
        - destructuring elem of tab into variables 
        - one by one
        - into grps   ...
        - destructuring for an object

+ String Template Literals : 20
        ` ............ ${nonVariable | expression}........  `

+ Regular Expressions regex : 21
        let pattern = /xyz/

+ Dom : 33 
        - rendering the web page out
        - techniques : assosciate you javascript to a web page (html)








