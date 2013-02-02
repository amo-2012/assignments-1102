**//

1) 3 different methods getting the date for todat tomorrw and yesterday

Creates JavaScript Date instances which let you work with dates and times.

new Date();
new Date(value);
new Date(dateString);
new Date(year, month, day [, hour, minute, second, millisecond]);


Methods

For methods available on Date instances, see Methods of Date instances.

now
    Returns the numeric value corresponding to the current time.
    
parse
    Parses a string representation of a JavaScript date, and returns the number of milliseconds since January 1, 1970, 00:00:00, local time.
    
UTC
    Accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a JavaScript Date object 
    since January 1, 1970, 00:00:00, universal time.
    
    
```
 Methods inherited from Function:
apply, call, toSource, toString
```



2)What does the Math.ceil() built-in function do? What is the default return value? What are some other built-in functions that do something similar?
        Returns the smallest integer greater than or equal to a number.
        
     ```
     Example: Using Math.ceil
    
    The following example shows example usage of Math.ceil().
    
    1
    2
    3
    Math.ceil(.95); // 1
    Math.ceil(4); // 4
    Math.ceil(7.004) // 8
    ```



    Because floor is a static method of Math, you always use it as Math.floor(), rather than as a method of a Math object you created.
    floor:
    
    ```
    function getFloor(x) {
       return Math.floor(x);
    }
    ```




3)What is the NaN type in Javascript and what does it stand for? When would you encounter it?

    A value representing Not-A-Number.
    
    NaN is a property of the global object.

The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. In modern browsers, NaN is a non-configurable, non-writable property. 
Even when this is not the case, avoid overriding it.

It is rather rare to use NaN in a program. It is the returned value when Math functions fail (Math.sqrt(-1)) or when a function trying to parse
a number fails (parseInt("blabla")).

Testing against NaN

Equality operator (== and ===) cannot be used to test a value against NaN. Use isNaN instead.

1
2
3
4
```
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
```




4)
How would I find the largest possible value that can be represented Javascript? What about the smallest?

    MAX_VALUE
The largest positive representable number.  The largest negative representable number is -MAX_VALUE.


    MIN_VALUE
The smallest positive representable number -- that is, the positive number closest to zero (without actually being zero). 
The smallest negative representable number is -MIN_VALUE.
