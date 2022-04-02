

// ` ${nonVariable | expression} `




//-------------------------- exmpl 1 : // use variable in a chaine 
let name = 'bob';
console.log(`hi ${name}`);

//-------------------------- exmpl 3 : garde la forme d'une paragraphe
let sentence1 = 'aaaaaaaaaa ggggggggggggggggggggggggggggggg hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh cfvvvvvvvvvvvvcvvvvvvvvvvvvfccc gvggggggggggggggggggggggggggggg';

let sentence = `aaaaaaaaaaa
                ggggggggggggggggggggggggggggggg
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                     cfvvvvvvvvvvvvcvvvvvvvvvvvvfccc
            gvggggggggggggggggggggggggggggg`;

console.log(sentence1);
console.log(sentence); 


//-------------------- exmpl3 : in 1 line u can write a msg , make if expression , 
function getReasonCount() { return 1 ; }

let interpolation = `Give me ${ (getReasonCount() ==1) ? 'one good reason !' : 'a few reasons '  }   to try this. `;
console.log(interpolation);