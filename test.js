var test = require('tape')
var domready = require('domready')
var iframe = require('./')

test('it adds an iframe to the document by default', function(t) {
  domready(function () {
    t.equal(document.querySelectorAll('iframe').length, 0, 'no frames')
    var frame = iframe({ body: 'hello world' })
    t.equal(document.querySelectorAll('iframe').length, 1, 'one frame')
    t.end()
  })
})
