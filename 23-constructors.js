// 23.  construction function , calls with the "new" keyword
// to construct an object

/*let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
}
*/

// is a function constructor :
// ps : function fist letter Maj
// not a constructor, like other language
        function Car( make, model, year) {
            this.make=make;
            this.model=model;
            this.year=year;
        }


//new : create new empty object
// in js we can use new with any nrml function
        let myCar = new Car('bmw', '745li', 2010);
        console.log(myCar);  // Car { make: 'bmw', model: '745li', year: 2010 }



//-----------------juste preuve :
        function myFunctionn() {
            console.log('i am a simple function');
        }

        let myFunction = new myFunctionn();
        console.log(typeof myFunction);  //object
        //myFunction();  // Error : TypeError: myFunction is not a function
        // Can't really do anything with this particular Object ... it's certainly Not a function reference anymore !


