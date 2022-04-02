
// rendering the web page out

// node .. api
/*
techniques : assosciate you javascript to a web page
*/ 


(function() {

    function clickHandler(message) {
        console.log('hi.....'+message);
    }

    // get reference to myButton
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() { clickHandler('hi from iffe') } );

})();

