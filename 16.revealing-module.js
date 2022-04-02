
// Revealing Module Pattern .. another form of module pattern (revolution of )(more pro)


var counter = (function(){

    //private stuff (unavailable outside this scope)
    //note : function declaration not expression
    let count = 0 ;

    function print(message) { 
        console.log(' ${message}  => ${count}' ) ;
    }

    function getCount() { return count;}
    function setCount(value) { count = value; }

    function incrementCount() {
        count += 1;
        print('after increment: ');
    }

    function resetCount () {
        print('before reset: ');
        count = 0; 
        print('after reset: ');
    }


    // return an object
    //"reveals" the public functions
    // clearer presentation 
    // however, you can (accidentally) overwrite
    // the property value :/
    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount  
    };

})();


console.log(counter); 
console.log(counter.get()); 