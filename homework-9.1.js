var assert = require("assert")

 /**
 * Homework 9  - Coding Dojos part 3 Mulitply
 * Four functions, each with 2 parameters:
 *   addition / subtraction / multiplication / division
 * 
 * testing positive and negative numbers - integer / float and zero.
 * 
 * testing multiplication:  
 *   C = A *  B 
 *   0 | 1 |  0 
 *   1 | 1 |  1
 * - 1 | 1 | -1
 * - 1 |-1 |  1
 *   0 |-1 |  0
 *   1 |-1 | -1
 *   0 | 0 |  1
 *   0 | 0 |  0
 *   0 | 0 | -1
 */


var multi = function(a,b){
    return (a*b);
    }

assert.equal(0,multi(1,0));
assert.equal(1,multi(1,1));
assert.equal(-1,multi(1,-1));
assert.equal(-1,multi(-1,1));
assert.equal(0,multi(-1,0));
assert.equal(1,multi(-1,-1));
assert.equal(0,multi(0,1));
assert.equal(0,multi(0,0));
assert.equal(0,multi(0,-1));