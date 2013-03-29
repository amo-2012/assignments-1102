var assert = require("assert");

/* Homework 10 - more coding dojo.
 *
 * @ param
   

 * testing Division:  
 *     C = A /  B 
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

var div = function(a,b) {
       if (typeof a === 0  || typeof b === 0)
       {
           throw  {
               name: 'typeError',
               message: 'can not divide by zero'
           };

            return (a/b);
       }
};

//assert.equal(1,div(1,1));
//assert.equal(6,div(12,2));
assert.equal(null,div(1,0));
//assert.equal(-1,div(-1,1));
//assert.equal(-1,div(1,-1));
assert.equal(null,div(-1,0));
//assert.equal(-1,div(-1,-1));
assert.equal(null,div(1,0));
assert.equal(null,div(0,0));
assert.equal(null,div(0,-1));




//     trying addition
/*
 *  1 +  1 =  2
 *  1 +  0 =  1
 *  1 + -1 =  0
 *  0 +  1 =  1
 *  0 +  0 =  0
 *  0 + -1 = -1
 * -1 +  1 =  0
 * -1 + -1 = -2
 * -1 +  0 = -1
*/

var add = function(a,b) {
    return (a+b);
}

assert.equal(2,add(1,1));
assert.equal(1,add(1,0));
assert.equal(0,add(1,-1));
assert.equal(1,add(0,1));
assert.equal(0,add(0,0));
assert.equal(-1,add(0,-1));
assert.equal(0,add(-1,1));
assert.equal(-2,add(-1,-1));
assert.equal(-1,add(-1,0));





//  subtraction
/*
 *  1 -  1 =  0
 *  1 -  0 =  1
 *  1 - -1 =  2
 *  0 -  1 =  -1
 *  0 -  0 =  0
 *  0 - -1 =  1
 * -1 -  1 =  -2
 * -1 - -1 =  0
 * -1 -  0 = -1
*/


var sub = function sub(a,b) {
     return (a-b);
}

assert.equal(0,sub(1,1));
assert.equal(1,sub(1,0));
assert.equal(2,sub(1,-1));
assert.equal(-1,sub(0,1));
assert.equal(0,sub(0,0));
assert.equal(1,sub(0,-1));
assert.equal(-2,sub(-1,1));
assert.equal(0,sub(-1,-1));
assert.equal(-1,sub(-1,0));
