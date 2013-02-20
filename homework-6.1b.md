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
			if ( "#" + match[1] !== match[2] ) {
				var cat = match[3];

				if ( !cur || cur !== cat ) {
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
		if ( cur ) {
			console.log("</ul>");
		}

	});
//
```