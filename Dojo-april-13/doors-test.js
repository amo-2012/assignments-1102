var assert = require("assert");
    hundredDoors = require("./doors-prod.js");
     

// starting with 10 doors to set up the pattern
var hallway = {
    doors: [10]
   };
     
 // hallway exists?    
assert(hundredDoors.hallway);

// doors in hallway?
assert(hundredDoors.hallway.doors);

// are there 100 doors?
assert(hundredDoors.hallway.doors.length === 10);