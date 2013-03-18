var assert = require ("assert");

 /**
 * Homework 9  - Coding Dojos part 2
 * Four functions, each with 2 parameters:
 *   addition / subtraction / multiplication / division
 * 
 * testing positive and negative numbers - integer / float and zero.
 * 
 * testing subtraction:  
 *   C = A -  B 
 *   0 | 1 |  1 
 *   1 | 1 |  0
 *   2 | 1 | -1
 *  -2 |-1 |  1
 *  -1 |-1 |  0
 *   0 |-1 | -1
 * - 1 | 0 |  1
 *   0 | 0 |  0
 *  -1 | 0 | -1
 */


var sub = function (a,b)
    {
        return (a-b);
    };
    
assert.equal(0,sub(1,1));
assert.equal(1,sub(1,0));
assert.equal(2,sub(1,-1));
assert.equal(-2,sub(-1,1));
assert.equal(-1,sub(-1,0));
assert.equal(0,sub(-1,-1));
assert.equal(-1,sub(0,1));
assert.equal(0,sub(0,0));
assert.equal(1,sub(0,-1));

