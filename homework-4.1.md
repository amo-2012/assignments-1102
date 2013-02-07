* /
* Open up Github, login; open up Cloud 9, login with Github
* Look through your forked sample projects and look for examples of list and
* dictionary definitions and methods.
* Copy and paste your examples into a file named "assignment-4.1.md";
* don't forget to surround it with the code delimiters (```).
* Write some comments identifying the lists, keys, indexes and other list and
* dictionary pieces we've discussed in class.
*  Save, add, and commit regularly; before class next week, push to Github.
* /


amo-2012/assignments/jquery/src/events.js: 437
```javascript

fixHooks: {}
// and empty list with an array called fixHooks
```




amo-2012/assignments/jquery/speed/benchmarker.js:1-39
```javascript

  jQuery.benchmarker.tests = [
    // Selectors from:
    // http://ejohn.org/blog/selectors-that-people-actually-use/
    /*
    // For Amazon.com
      "#navAmazonLogo", "#navSwmSkedPop",
    ".navbar", ".navGreeting",
    "div", "table",
    "img.navCrossshopTabCap", "span.navGreeting",
    "#navbar table", "#navidWelcomeMsg span",
    "div#navbar", "ul#navAmazonLogo",
    "#navAmazonLogo .navAmazonLogoGatewayPanel", "#navidWelcomeMsg .navGreeting",
    ".navbar .navAmazonLogoGatewayPanel", ".navbar .navGreeting",
    "*",
    "#navAmazonLogo li.navAmazonLogoGatewayPanel", "#navidWelcomeMsg span.navGreeting",
    "a[name=top]", "form[name=site-search]",
    ".navbar li", ".navbar span",
    "[name=top]", "[name=site-search]",
    "ul li", "a img",
    "#navbar #navidWelcomeMsg", "#navbar #navSwmDWPop",
    "#navbar ul li", "#navbar a img"
    */
    // For Yahoo.com
    "#page", "#masthead", "#mastheadhd",
    ".mastheadbd", ".first", ".on",
    "div", "li", "a",
    "div.mastheadbd", "li.first", "li.on",
    "#page div", "#dtba span",
    "div#page", "div#masthead",
    "#page .mastheadbd", "#page .first",
    ".outer_search_container .search_container", ".searchbox_container .inputtext",
    "*",
    "#page div.mastheadbd", "#page li.first",
    "input[name=p]", "a[name=marketplace]",
    ".outer_search_container div", ".searchbox_container span",
    "[name=p]", "[name=marketplace]",
    "ul li", "form input",
    "#page #e2econtent", "#page #e2e"
  ];
// a dictionary of html tags
```


amo-2012/assignments/jquery/release.js:60
```javascript
    if ( process.argv[2] === "-d" ) {
// a dictionary used in this  IF statement   
```






amo-2012/assignments/jquery/release.js:67 -73
```javascript
    var newver, oldver,
		rversion = /^(\d)\.(\d+)\.(\d)((?:a|b|rc)\d|pre)?$/,
		version = ( process.argv[3] || "" ).toLowerCase().match( rversion ) || {},
		major = version[1],
		minor = version[2],
		patch = version[3],
		xbeta = version[4];
// a dictionary within a variable, using keys 1,2,3 &4 and values of major,minor, patch, & xbeta
```


amo-2012/assignments/jquery/src/manipulation.js: 15-16
```javascript
    	// Support: IE 9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
// a little help for IE 9 users  :(   
// using some html tags 
```



amo-2012/assignments/jquery/build/release-notes.js: 17-23
```javascript

http.request({
    host: "bugs.jquery.com",
	port: 80,
	method: "GET",
	path: "/query?status=closed&resolution=fixed&max=400&component=!web&order=component&milestone=" + version
}, function (res) {
	var data = [];
//  keys as: host / port / method / path

```

