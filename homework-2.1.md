# Homework 2.1 - Ever wonder what all these signs say?

For Homework 1.1, you found a nice project on Github, forked it into your own account, and cloned it into your Cloud 9 IDE account. 
For this assignment, pick one or more Javascript files from your project
(you DID pick a Javascript project, didn't you?) and identify some of the following items of Javascript grammar 
and vocabulary that we talked about in class, including but not limited to:

* Variables: `$name`
* Constants: `E_USER_WARNING`, `MY_AWESOME_CONSTANT`
* Arithmetic operators: addition (+), subtraction (-)
* Functions: `array_slice()`, `do_something_amazing()`

When you find one, identify the file and line number in this file, below the instrcutions per the example below. 
Try to make the indentation match the original file (yes, copy and paste), even if that means there's NO indentation. Crazy Javascript-ers.

You don't have to identify EVERYTHING in a given line or even in a single file, but you may get extra points if you're thorough or make a survey of more than one file... And you might get docked if you make too much work for me. I at least want to see about 50 lines of code.

When you're done editing this file, save it, commit it, and push it to your "assignments" repo, called "origin". You remember how to push, right?

## Your work should look like this...

`path/to/file.js:3`
```javascript
    if ( true )
    // Boolean: true
```

`path/to/file.js:42`
```javascript
    var name = do_something_amazing() + 1;
    // Variable: name
    // Function: do_something_amazing()
    // Integer: 1
```

## Now get to it!


//  amo-2012 homework below:

`http://c9.io/amo-2012/jquery/src/events.js:6-8`
```javascript
    function returnTrue() {
    return true;
    }
    //  here is a function called 'returnTrue'
```

`http://c9.io/amo-2012/jquery/src/events.js:6-8`
```javascript
    function returnFalse() {
    return false;
    }
    // another function, this one returns 'false'
```



`http://c9.io/amo-2012/jquery/src/events.js:24`
```javascript   
    var handleObjIn, eventHandle, tmp,
    // here are 3 variables named as (above)
```



`http://c9.io/amo-2012/jquery/src/support.js:6'
```javascript
   div.innerHTML = "<a>a</a><input type='checkbox'/>";
   // this looks to be incorporating html  within the coding which precedes it on lines 3 and 4:
   
   
     //  var support, a, select, opt, input, fragment,
	//	div = document.createElement("div");
```



`http://c9.io/amo-2012/jquery/build/release.js:6'
```javascript
    function initialize( next ) {
        // here is  function named initialize
```
    
    
'http://c9.io/amo-2012/jquery/build/release.js:67-68'
```javascript
      var newver, oldver,
		rversion = /^(\d)\.(\d+)\.(\d)((?:a|b|rc)\d|pre)?$/,
        // 3  varirables   newver   oldver   rversion
```


'http://c9.io/amo-2012/jquery/build/release.js:102'
```javascript
    function checkGitStatus( next ) {
        // a function that gets status from Github
```


'http://c9.io/amo-2012/jquery/build/release.js:103'
```javascript
    git( [ "status" ], function( error, stdout, stderr ) {
        // dk what this is but it looks like  'git' is a function in jquery - maybe??
```



'http://c9.io/amo-2012/jquery/ajax.js:74'
```javascript
    while ( (dataType = dataTypes[i++]) 
    // increasing the value of i  by its same value
```