```javascript
jQuery/build/release.js:58

function initialize( next )
// name: Initialize
// arguments:  next
//return value:    ?? i think it may display the version number.
```


```javascript
jQuery/build/release.js:240


function die( msg ) 
// name:  Die
// arguments:  msg
// return value: "ERROR: " + msg
```

```javascript
jQuery/speed/benchmark.js:11-14

function benchmarkString(fn, times, name) {
    var fn = new Function("i", "var t=new Date; while(i--) {" + fn + "}; return new Date - t")(times)
	fn.displayName = name || "benchmarked";
	return fn
// name: benchmarkString
// arguments:  fn, times, name
// in scope variables: fn - which is a new function ??
// return value: the new function
```


```javascript
jQuery/speed/benchmarker.js:147-153

 function count() {
   for(i = 3; i <= jQuery.benchmarker.libraries.length + 2 ; i++) {
     var fails = jQuery("td:nth-child(" + i + ").fail").length;
     var wins = jQuery("td:nth-child(" + i + ").winner").length;
     jQuery("tfoot tr:first th:eq(" + (i - 1) + ")")
      .html("<span class='wins'>" + wins + "</span> / <span class='fails'>" + fails + "</span>");
   }
// name: count
// arguments:  none 
// in scope variables:  fails, wins
// return value:   Possibly returns the counts of times there are wins and fails. ???
   
```


```javascript
jQuery/src/ajax.js:90-112

function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR )

    var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}
//name: inspectPrefilterOrTransports
// arguments: structure, options, originalOptions, jqXHR
// inscope variables: inspected, datatypeOrTransport
// return value:  selected
```


```javascript
jQuery/src/ajax.js:117-131

function ajaxExtend( target, src ) {
    var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}
// name: ajaxExtend
// arguments: target, src
// inscope variables: key, deep
// return value:  target
```
