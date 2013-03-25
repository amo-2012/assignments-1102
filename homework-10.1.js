var assert = require ("assert");

/* Homework 10 - more coding dojo.
 *
 * @ param
   

 * testing Division:  
 *     C = A *  B 
 *1    1 | 1 |  1 
 *2    x | 1 |  0
 *3  - 1 |-1 |  1
 *4  - 1 | 1 | -1
 *5    x |-1 |  0
 *6    1 |-1 | -1
 *7    0 | 0 |  1
 *8    0 | 0 |  0
 *9    0 | 0 | -1
 *10   5 |20 | 4
 */
 
function div(a,b,c) {
    c = (a/b);
    return c;
     
   }
   
 
assert(div(1,1)==1,'1 divided by 1 equals one');
//assert(div(1,0)==NaN, 'can not divide by  zero');
assert(div(-1,-1)==1, '-1 divided by -1' );
assert(div(1,-1)==-1, '1 /1');
//assert(div(-1,0)==Nan,'1');
assert(div(-1,-1)==1, ' ');
assert(div(0,-1)==0, ' ');
assert(div(0,-1)==0, ' ');
assert(div(-1,0)==Nan, ' ');



