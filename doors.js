 /**
 * THE 100 DOOR MATRIX. 
 * 
 * A hallway with 100 doors. All are closed.
 * Pass 1: open every door  (noted as '0'  = opened) 
 * Pass 2: closed every other door   (noted as '1' = closed)
 * Pass 3: toggle (change the state ->  open   vs closed of every 3rd door
 * Pass 4: toggle every 4th door.
 * Repeat for 100 passes of the hallway.
 * 
 * What are the states of the doors after 100 passes?
 * 
 */
var assert = require("assert");

var hallway =  new Array();
var doors = 100;
var i;

// closed doors
for (i=1; i<doors; i++) {
     hallway [i] = new Array ();
     hallway [i] = 1;
     

     }
     
     
//pass one
for (i=1; i< doors; i++);
     hallway [1 ] = 1;