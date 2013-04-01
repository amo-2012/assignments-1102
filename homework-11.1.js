/**
 * Practicing the dojo
 * 
 *  Four funtions, each with 2 paramaters
 *  Add | Sub | Multi  | Div
 * 
 * testing positive and negative numbers and zero
 * 
 *  Assertions for Addtion:
 *   A | B  = Sum
 *   1   1  =  2
 *   1   0  =  1
 *   1  -1  =  0
 *   0   1  =  1
 *   0   0  =  0
 *   0  -1  = -1
 *  -1   1  =  0
 *  -1   0  = -1
 *  -1  -1  = -2
 */
 
 var assert = require("assert");
 
 var add = function(a,b){
     return (a+b);
 }
 
assert.equal(2,add(1,1));
assert.equal(1,add(1,0));
assert.equal(0,add(1,-1));
assert.equal(1,add(0,1));
assert.equal(0,add(0,0));
assert.equal(-1,add(0,-1));
assert.equal(-1,add(-1,0));
assert.equal(0,add(-1,1));
assert.equal(-2,add(-1,-1));



/**
 * 
 *  Assertions for Subtraction:
 *   A | B  = Dif
 *   1   1  =  0
 *   1   0  =  1
 *   1  -1  =  0
 *   0   1  =  -1
 *   0   0  =  0
 *   0  -1  = -1
 *  -1   1  =  0
 *  -1   0  = -1
 *  -1  -1  = -2
 * 
 */

var sub = function(a,b){
    return (a-b);
    }
  
  assert.equal(0,sub(1,1));
  assert.equal()
assert.equal(-2,sub(-1,1));