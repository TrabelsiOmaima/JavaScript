

//------------- create object : 
        let car = {
            //--- name value pairs( Property: value Property)
            make: 'bmw',
            model: '745li',
            year: 2010,

            // --- methodes (functions in a objct called mtd)
            getPrice: function() { return 5000; } ,

            printDescreption: function() { 
                console.log( this.make+ ' ' + this.model ); 
            }
        }


//--------------- call propertys and mtds :
        car.printDescreption();
        console.log(car.year);
        //or 
        console.log(car['year']);  // ça marche mais a évitér



//---------------- create an empty object then add propertys.. the dynamism
        var anotherCar = {};
        anotherCar.wathever = 'psssst';
        console.log(anotherCar.wathever);


//---------------- object into object // the power of "Name Space"
        var a = {
            myproperty: { b: 'hi'  }
        };
        console.log(a.myproperty.b);



//------------------ "object graph" : object 3andou property = tab of objects
        var c = {
            myproperty: [
                { d: 'this' },
                { e: 'can'  },
                { f: 'get'  },
                { g: 'crazy'}
            ]
        };


//----------------------------  tab of objects
        let cerLot = [
            { year: 2017, make: 'Toyota', model: '4Runner' }, 
            { year: 2015, make: 'Bmw', model: '528i' }, 
            { year: 1982, make: 'Buick', model: 'Skylark' }, 
        ]; 



//-------------  object of tables , each table is an object 
//--- same of Json !!
        let contacts = {
            customers: [
                { fistName: 'cc', lastName:'ccc', phoneNumber: [ '22222', '222222222']  },
                { fistName: 'cc', lastName:'ccc', phoneNumber: [ '22222', '222222222']  },
                { fistName: 'cc', lastName:'ccc', phoneNumber: [ '22222', '222222222']  },
            ],

            employees: [
                { fistName: 'cc', lastName:'ccc', phoneNumber: [ '22222', '222222222']  },
                { fistName: 'cc', lastName:'ccc', phoneNumber: [ '22222', '222222222']  },
                { fistName: 'cc', lastName:'ccc', phoneNumber: [ '22222', '222222222']  },
            ]

        };