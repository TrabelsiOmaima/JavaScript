//statement types : if , switch

// if 
var count = 2; 
if (count == 4) {
    console.log('count is 4');
} else if (count > 4){
    console.log('count is greater than 4');
}  else {
    console.log('count is less than 4');
} 




// switch 
let hero = 'BaTman';
switch (hero.toLowerCase())  {
    case 'superman':
        console.log('super strength');
        console.log('x-ray vision');
        break;

    case 'batman':
        console.log('intellegence');
        console.log('fighting skills');
        break;

    default:
        console.log('member of JLA');
}

/*ps: without Break; 
 affiche :
    intellegence
    fighting skills
    member of JLA

    c-a-d : exécuter le traitement du cas en qst 
    + traitement elli fl cases li ta7tha kol

    ---
     with break;
     affiche :
        intellegence
        fighting skills

*/


//  Ternary operator   == : to compare value ; === : to compare value and data type (strict coparaison)
//  (expression) ? 'if true'  : 'if false' ; 
let a=1, b='1';
console.log((a == b) ? 'equal value' : 'inequal value');
console.log((a === b) ? 'equal value and data type' : 'inequal value ou data type');
console.log((a !=b ) ? 'not equal value' : 'equal value');
console.log((a !== b) ? 'not equal value or data type' : 'equal value and data type');

