
/* 27: truthy and falsy values  :
+ nrml true/ false : exmpl : evaluation expression : (a>b)
+ based on javascripts rules => false / true : cases
*/


//------ cases falsy based on javascripts rules  :

if (false)       {} else  { console.log('false  is falsy'); }
if (null)        {} else  { console.log('null  is falsy'); }
if (undefined)   {} else  { console.log('undefind is falsy'); }
if (0)           {} else  { console.log('0  is falsy'); }
if (NaN)         {} else  { console.log('NaN  is falsy'); }
if ('')          {} else  { console.log(` '' an ampty string is falsy`); }
if ("")          {} else  { console.log(` "" an ampty string is falsy`); }



 // ---- Everything else is truthy :

 if (true)           { console.log('true is truthy'); }
 if ({})             { console.log(' {} an ampty object is truthy'); }
 if ([])             { console.log(' [] an nampty array is truthy'); }

 if ('bob')          { console.log('a non-empty object is truthy'); }
 if (new RegExp())   { console.log('a new instance ampty or not  of an object  is truthy'); }

 if (10)             { console.log('posivive integers are  truthy'); }
 if (-10)            { console.log('negative integers are  truthy'); }
 if (1.23)           { console.log('posivive floats are  truthy'); }
 if (-1.23)          { console.log('positive  floats are  truthy'); }
 if (-1.23)          { console.log('nagative floats are  truthy'); }
 if (Infinity)       { console.log('positive Infinity is truthy'); }
 if (-Infinity)       { console.log('negative Infinity is truthy'); }

