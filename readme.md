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

## license

BSD
