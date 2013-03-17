var assert = require("assert");

 /**
 * Homework 9  - Coding Dojos
 * Four functions, each with 2 parameters:
 *   addition / subtraction / multiplication / division
 * 
 * testing positive and negative numbers - integer / float and zero.
 * 
 * testing addition:  
 * SUM = A +  B 
 *   2 | 1 |  1 
 *   1 | 1 |  0
 *   0 | 1 | -1
 *   0 |-1 |  1
 *  -1 |-1 |  0
 *  -2 |-1 | -1
 *   1 | 0 |  1
 *   0 | 0 |  0
 *  -1 | 0 | -1
 */



 var add = function(a,b)  {
        return (a+b);
    }
    
assert.equal(2,add(1,1));  
assert.equal(1,add(1,0));
assert.equal(0,add(1,-1));
assert.equal(0,add(-1,1));
assert.equal(-1,add(-1,0));
assert.equal(-2,add(-1,-1));
assert.equal(1,add(0,1));
assert.equal(0,add(0,0));
assert.equal(-1,add(0,-1));



