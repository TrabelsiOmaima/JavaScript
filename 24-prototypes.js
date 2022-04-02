 

/*
24. objects and prototype chains :
    - the fact to create a new object from an exesting object (exmpl : car)
    - this fact create a "priminal link" between the old and the new object
    - the old object is a : "prototype" for the new object
    -  the new object "chaine to" the "prtotype" ( teh old obejct)
    - "java script prototype inheretns" ~heritage :  pas tellement juste so stay away
    -  true sentense : "objects linking to others objects"




 +  "prototype chaine works in javascript" : 
        1. javascript look for the own proprety of new object si existe 
        else 
        2. look for the proprety get from the original object
        else ( n'existe ni new ni original )
        3.  undefind
*/




// ------- create a new object from an other object

let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
};

let newCar = Object.create(originalCar);

console.log(newCar.make);  // bmw
console.log(Object.getPrototypeOf(newCar)); // { make: 'bmw', model: '745li', year: 2010 }// originalCar

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);  // bmw

// add new proprety to the original object = auto add to the new object
    originalCar.doors = 4;
    console.log(newCar.doors) ; //4
// ownProprety :
    console.log(originalCar.hasOwnProperty('doors')) ; // true
    console.log(newCar.hasOwnProperty('doors')) ;  //false


// change a proprety 
    console.log(newCar.make);  // bmw , ~make is NOT the own proprety of newCar
    newCar.make = 'audi';  // make became the "own proprety"of newCar
    console.log(newCar.make);  //  audi
    console.log(originalCar.make);  // bmw


// add new proprety to the new object = NOT add to the original object
    newCar.x = 1;
    console.log(newCar.x); // 1
    console.log(originalCar.x); // undefind
    console.log(newCar.whatever); //// undefind

