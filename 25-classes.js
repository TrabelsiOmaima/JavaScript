/*
+ javascript technicly dont has the notion of "classes"
+ js give u the impression that classes works , but in  realty nothing has changed
+ feature of javascript : classes
+ actuly /realy: "object base prototypes inheretns"
+ "syntactic suger" = javascript classes



+ function declaration , function expression 
=> classe declaration , classes expression

*/



//------------------- declaration :
class Car {
    constructor (make, model, year) {
        this.make=make;
        this.model=model;
        this.year=year;
    }


    print(){
        console.log(` make : ${this.make} model: ${this.model} year: ${this.year}`);
    }

}

let myCar = new Car('bmw', '745li', 2010);
console.log(myCar);  // Car { make: 'bmw', model: '745li', year: 2010 }

myCar.print(); // make : bmw model: 745li year: 2010

 
// -------heritage  "extends"
class SportCar extends Car{
    revEngine() {
        console.log('vrrrroom goes the'+ this.model);
    }

}

let mySportCar = new SportCar('dodge', 'viper', 2011);
mySportCar.print(); //make : dodge model: viper year: 2011
mySportCar.revEngine(); //vrrrroom goes theviper
// myCar.revEngine(); //TypeError: myCar.revEngine is not a function
// type script : super type of javascript , feel like c# , java






//----------------------------- expression
let car = class {

}