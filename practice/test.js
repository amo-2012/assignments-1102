var assert = require("assert");
     hundredDoors = require("./prod.js");


//checking for hallway
assert(hundredDoors.hallway);


// checking for doors
assert(hundredDoors.hallway.doors);


// are there 10 (100) doors in the hallway
assert.equal(hundredDoors.hallway.doors.length, 10);


// initially, are all the doors closed
hundredDoors.hallway.doors.forEach(function (door) {
     assert.equal(door, 0);
     });

// do we have function to change the state of the doors
assert(hundredDoors.hallway.toggle);


// toggle door from closed (0) to an open state (1)
assert(hundredDoors.hallway.toggle(0) === 1);


// and a function to toggle door to a closed state
assert(hundredDoors.hallway.toggle(1) === 0);


//walkdown hallway
assert(hundredDoors.hallway.pass);


// status of each door as open after 1st pass
assert (hundredDoors.pass().forEach(function (door) {
     assert.equal( door, 1);
    