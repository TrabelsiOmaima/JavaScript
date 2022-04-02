
/* 
        - built-in-natives  : ralation between primitives and builts
        - string is an primitive type (howa w number w boolean)
        - string like an object a des fnct predefinie.. un constructeur,..etc
*/


let myString = new String('howdy');
console.log(myString);  //[String: 'howdy'] // objet esmou string, proprety : howdo
console.log(typeof myString); //object
// convert l'obejct string to a native string type
console.log(myString.toString()); //howdy
console.log(typeof myString.toString()); // string


/* --- liste of builts how have  primitive version :  
String()
Number()
Boolean()
Object()
Function()
Symbol()

--------------
Date()
Error()
*/


/* --- liste of builts how don't have  primitive version :  primitive version =object
Array()
RegExp()
*/


//------------------------ auto convert by javascript beetween primitive and builts

let myPrimitive = 'THIS IS CRAZY';
console.log(typeof myPrimitive) ;  // string

myPrimitive = myPrimitive.toLowerCase(); // convert to builts (object m string) pour pouvoir appliquer .toLowerCase(),  then reconvert to primitive  (string)
console.log(typeof myPrimitive) ; // string 


//-------------------- conserve the primitive
 let myNumber = new Number(7);  //object
 let myPrimitiveN = myNumber.valueOf();
 console.log(typeof myPrimitiveN);  // number