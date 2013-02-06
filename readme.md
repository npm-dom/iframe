# iframe

higher level api for creating and removing iframes in browsers

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
  body: string contents for `<body>`
  head: string contents for `<head>`
  html: string contents for entire iframe
  container: (constructor only) dom element to append iframe to, default = document.body
  scrollingDisabled: (constructor only) boolean for the iframe scrolling attr
}
```

you can also just pass in a string and it will be used as `{html: 'yourstring'}`

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
