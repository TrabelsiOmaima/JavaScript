

//function declaration 
function sayHello() {
    console.log('------------------------');
    console.log(' Hello maima ^^ ');
    console.log('------------------------');
}


//invoke function 
sayHello();

//variable pointeur sur funct
let a = sayHello();  // affichage , exécution ()
a;     // ps d'affichage !
 

let b = sayHello;  // ps d'affichage
b;     // ps d'affichage
b();   //// affichage , exécution ()


//function with arguments 
function sayHi(name) {
    console.log('------------------------');
    console.log(' Hello  ' + name +  '  ^^ ');
    console.log('------------------------');
}

sayHi('omaima');
sayHi('Emma');



//return : 1 value from a function 
function calculTax(price){
    return price*0.18;
}

console.log(calculTax(100));

