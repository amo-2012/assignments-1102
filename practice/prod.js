/**
 * a hallway with 100 doors. walk down the hallway, open each door
 * pass 2: walk and toggle (close) every other door
 * pass 3: walk and toggle every 3rd door >  if closed, open door, if opened, close the door
 * 
 */

module.exports = {
     hallway: {
          doors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
          toggle:  function (door) {
               if (door === 0) { 
                    return 1;  
                } 
                else { 
                       return 0;
                }
},
 
 
pass: function() {
     this.doors = this.doors.map (this.toggle );
     return this.doors;
     }
}
}   