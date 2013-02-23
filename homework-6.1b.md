# homework for week 6

/* identify loops in a project
*
*
*
*/

amo-2012/sandbox/jquery/src/ajax.js: 68-86

```javascript

    var dataType,
            i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
//   find my drawing at:  https://docs.google.com/drawings/d/1t8qgVciG8u6T3xF8-FpKtWx5OrnaiUIaqFBeUpxYBCU/pub?w=1118&h=898

```


amo/jquery/build/release-notes.js: 29-58
```javascript
    res.on( "end", function() 
    {
		var match,
			file = data.join(""),
			cur;

		while ( (match = extract.exec( file )) ) {
			if ( "#" + match[1] !== match[2] ) {   // amo ~ if # and match1 does not equal match2
				var cat = match[3];

				if ( !cur || cur !== cat ) {  // amo ~ if not cur  OR cur is not equal to cat
					if ( cur ) {
						console.log("</ul>");
					}
					cur = cat;
					console.log( "<h2>" + cat.charAt(0).toUpperCase() + cat.slice(1) + "</h2>" );
					console.log("<ul>");
				}

				console.log(
					"  <li><a href=\"http://bugs.jquery.com/ticket/" + match[1] + "\">#" +
					match[1] + ": " + match[2] + "</a></li>"
				);
			}
		}
		if ( cur ) {   // if cur exists
			console.log("</ul>");
		}

	});
// amo ~  drawn out:  https://docs.google.com/drawings/d/1LP1Hsh7OhXka_GuDmgVrF4KiB4trtYYwAn5gveKyUTM/edit?usp=sharing
```

jquery/src/attributes.js:57-64
```javascript
    			if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );
                    
// amo ~ if 'cur' exists, then j is 0.  then loop  WHILE  clazz increments classes by one, then jQuery.trim(cur) is assigned to elem.className
```


jquery/src/attributes.js:156-158
```javascript
    	for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
//  amo ~ a 'for' loop.  when 'i' is less than 'l', increment by one;  and IF .... (line 89), then return true
```