
/* fnct expression is a function without id (name) 
case : singel use
*/


// exmpl : like input to another fnct
setTimeout( function () { console.log('i waited 4 seconds')} , 4000) ;

//flexibilité 
let counter = 0;
function timeout() {
    setTimeout( function () { console.log(' exécution number = '+ counter++); timeout();} , 2000) ;
}


timeout();
//ctrl + c : pour arréter




// create and invoke a function expression   IIFE
// la regrouper dans (func....})
// l'éxécuter avec les 2ém ();

(function () { console.log('Immediately Invoked Function Expression (IIFE) '); }) ();














