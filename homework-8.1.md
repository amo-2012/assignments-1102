git aGI/*
homework 8    Object definitions
*/

```javascript
scr/core.js:41-44


jQuery = function( selector, context ) {
    	// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},
    
* function: jQuery
* arguments: selctor, context
* return:    (see lines 76-81)
//
```


```javascript
jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
    //
// method: init, jQuery.fn
// properties:  
```



```javascript
jQuery/core.js: 70-81

jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}
// The whole hog - prototypal inheritance
// properties: prototype
// method: constructor
```



```javascript
jQuery/src/ajax.js:191-194

jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
    jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
// constructor
// properties: each
// method: funcion(fn)
```

```javascript
jQuery/src/manipulation.js:602-610
function getAll( context, tag ) {
    var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}
// the easy way. One instance
// properties: nodeName
// method: getAll
```
