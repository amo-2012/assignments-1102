var assert = require ("assert");

 /**
 * Homework 9  - Coding Dojos part 3 Mulitply
 * Four functions, each with 2 parameters:
 *   addition / subtraction / multiplication / division
 * 
 * testing positive and negative numbers - integer / float and zero.
 * 
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

var div = function(a,b){
    return a/b;
    }
    
assert.equal(1,div(1,1));
//assert.equal(null,div(1,0));
assert.equal(-1,div(-1,1));
assert.equal(-1,div(1,-1));
//assert.equal(null,div(-1,0));
assert.equal(1,div(-1,-1));
assert.equal(0,div(0,1));
//assert.equal(0,div(0,0));
assert.equal(0,div(0,-1));
assert.equal(5,div(20,4));


