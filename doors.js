 /**
 * THE 100 DOOR MATRIX. 
 * 
 * A hallway with 100 doors. All are closed.
 * Pass 1: open every door  (noted as '0'  = opened) 
 * Pass 2: closed every other door   (noted as '1' = closed)
 * Pass 3: toggle (change the state ->  open  vs closed   or closed vs open)   of every 3rd door
 * Pass 4: toggle every 4th door.
 * Repeat for 100 passes of the hallway.
 * 
 * What are the states of the doors after 100 passes?
 * 
 */
var assert = require("assert");

var hallway =  new Array();
var doors = 10;  // starting with 10 doors at first. Will increase to 100 once pattern is established.
var i;

// closed doors
for (i=1; i<doors; i++) {
     hallway [i] = new Array ();
     hallway [i] = 1;
          }
     
     
//pass one > OPEN every door
for (i=1; i< doors; i++){
     hallway [i] = 0;
     console.log(hallway[i]);
}

// pass two >  toggle (CLOSE ) every other door
for (i=1; i<doors; i+=2) {
     hallway[i] = 1;
   console.log(hallway[i]);
}

// pass three > toggle every 3rd door
for (i=0; i<doors; i+=3){
     if (doors[i] === 0);
     hallway[i] = 1;
     console.log(hallway[i]);
     }
// above submitted 9:50   apr 11


for (i=1; i<doors; i+=3){
     if hallway[i] === 0;
     hallway[i] = 1;
     console.log(hallway[i]);
}