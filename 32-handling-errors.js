

/* javascript : t5arrajch barcha errors..  5ayeb
5atr mata3rach win 8alet w kifech tsalla7 fi cases
*/


let a = 7 * undefined / "panama" 
console.log(a);   // NaN 





// -----------without try .. catch  => l'application te9f
function beforeTRyCatch() {
    let obj = undefined;
    //console.log(obj.b);
    console.log('If the previous line of code throws an exeption you\'ll never see this.') ;
}

beforeTRyCatch(); //TypeError: Cannot read properties of undefined (reading 'b') at beforeTRyCatch 




// ----------- try..catch ==> l'appliaction still running : 
function afterTryCatch() {
    try{
        let obj = undefined;
        console.log(obj.b);
        console.log('If the previous line of code throws an exeption you\'ll never see this.') ;
    
   
    } catch (error) {
        console.log('I caught an exception :' + error.message)
    
    //------------ finnally 
    } finally {     
        console.log('this will happen no matter what.')
    }

    console.log('My application is still running !');
}

afterTryCatch();
//I caught an exception :Cannot read properties of undefined (reading 'b')
//My application is still running !



//-// -------------try..catch.. if (test)---

function performCaculation(obj) {
    if (!obj.hasOwnProperty('b')) {
        throw new Error ('object missing proprety') ;
    }

    return 6;
}


function performHigherLevelOperation() {
    let obj= {};
    let value =0;

    try {
        value = performCaculation(obj);
    }  catch(error) {
        console.log(error.message);
    }


    if(value == 0) {  // test ma5dmch try
        //contingency
        //retry logic
    }
}

performHigherLevelOperation();
