var test = require('tape')
var domready = require('domready')
var iframe = require('./')

test('it adds an iframe to the document by default', function(t) {
  domready(function () {
    t.equal(document.querySelectorAll('iframe').length, 0, 'no frames')
    var frame = iframe({ body: 'hello world' })
    t.equal(document.querySelectorAll('iframe').length, 1, 'one frame')
    frame.remove()
    t.end()
  })
})

test('it removes the iframe from the document', function(t) {
  domready(function () {
    t.equal(document.querySelectorAll('iframe').length, 0, 'no frames')
    var frame = iframe({ body: 'hello world' })
    t.equal(document.querySelectorAll('iframe').length, 1, 'one frame')
    frame.remove()
    t.equal(document.querySelectorAll('iframe').length, 0, 'no frames')
    t.end()
  })
})


test('it renders the iframe contents as html, not plaintext', function(t) {
  domready(function () {
    t.equal(document.querySelectorAll('iframe').length, 0, 'no frames')
    var frame = iframe({
      body: '<div>hello</div> <div>quirky</div> <div>world</div>',
      sandboxAttributes: ['allow-same-origin'],
    })
    t.equal(document.querySelectorAll('iframe').length, 1, 'one frame')

    frame.iframe.addEventListener('load', function() {
      var content = frame.iframe.contentDocument || frame.iframe.contentWindow.document
      t.equal(content.body.childElementCount, 3, 'correct number of elements in body')
      frame.remove()
      t.end()
    })
  })
})
