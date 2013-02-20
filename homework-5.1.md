* /
*
*
*/

amo-2012/assignments/jquery/src/attributes.js: 121-141
```javascript
    	    return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			// Toggle whole class name
			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}
//  if the previous condition is not met, then  consider if type is REALLY equal to 'undefinded or the type is true, then ...
```




amo-2012/assignments/jquery/src/attributes.js: 311-331
```javascript

    	if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			// In IE9+, Flash objects don't have .getAttribute (#12945)
			// Support: IE9+
// at first, we look at value, if not undefined, 
// then test if the  value is NULL, and if true, then apply jquery remove att to Elem and Name.  But
//  if not, then return 'Ret' (ln 44)if Hooks AND Notxml AND string 'set' in Hooks AND "......."
//  OR:   apply Elem.setAttribute to Name, Value plus empty string and then return the Value
```

// Feb 20 no changes - testing  c9
