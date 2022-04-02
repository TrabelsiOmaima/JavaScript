
/*

closures = associate some data with a fucntion
mari(mariage) a fnct to a data = team = work together
----------------
scoping works ! 
------------
closure hia un variable (data) tt5dm biha l fnct
kol apl ll fnct b data diff .. donne un nv closure


----------------important  !!
each closure create a zone was called "lexical envirement" 
me : fact : data de closure x .. 3andha lexical .. decraration and use

*/


//1. fnct  + 2.data input raja3t biha f return output
function sayHello (name) {
    return function() {
        console.log('howdy ' + name); 
    }
}

//3. put l apl b data x fl variable x 
let bob = sayHello('bob'); //just affectation
let grant = sayHello('grant'); 
let conrad = sayHello('conrad'); 


//4.exécution
bob();  // howdy bob 
grant();
conrad();