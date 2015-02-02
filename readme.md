# iframe

higher level api for creating and removing iframes in browsers

[![browser support](https://ci.testling.com/npm-dom/iframe.png)](https://ci.testling.com/npm-dom/iframe)

[![NPM](https://nodei.co/npm/iframe.png)](https://nodei.co/npm/iframe/)

## usage

use with [browserify](http://browserify.org)

```
npm install iframe
```

```javascript
var iframe = require('iframe')

// creates a new iframe and appends it to the container
frame = iframe({ container: document.querySelector('#container') , body: "hi" })

// completely removes previous iframe from container and generates a new one
frame.setHTML({ body: "bye" })
```

## options

you can pass this into the constructor or `setHTML`

```
{
  name: name of the iframe,
  src: if src url is passed in use that (this mode ignores body/head/html options),
  body: string contents for `<body>`
  head: string contents for `<head>`
  html: string contents for entire iframe
  container: (constructor only) dom element to append iframe to, default = document.body
  sandboxAttributes: array of capability flag strings, default = ['allow-scripts']
  scrollingDisabled: (constructor only) boolean for the iframe scrolling attr
}
```

you can also just pass in a string and it will be used as `{html: 'yourstring'}`

### security

by default the sandbox attribute is set with 'allow-scripts' enabled. pass in an array of capability flag strings. [Available flags](http://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/):
```
allow-forms allows form submission.
allow-popups allows (shock!) popups.
allow-pointer-lock allows (surprise!) pointer lock.
allow-same-origin allows the document to maintain its origin; pages loaded from https://example.com/ will retain access to that origin’s data.
allow-scripts allows JavaScript execution, and also allows features to trigger automatically (as they’d be trivial to implement via JavaScript).
allow-top-navigation allows the document to break out of the frame by navigating the top-level window.
```

## gotchas

iframes are weird. here are some things I use to fix weirdness:

### loading javascript into iframes

```javascript
// setTimeout is because iframes report inaccurate window.innerWidth/innerHeight, even after DOMContentLoaded!
var body = '<script type="text/javascript"> setTimeout(function(){' + javascriptCodeHere + '}, 0)</script>'
```

### getting rid of dumb iframe default styles

```javascript
var head = "<style type='text/css'> html, body { margin: 0; padding: 0; border: 0; } </style>"
```

## license

BSD
