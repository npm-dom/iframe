module.exports = function(opts) {
  return new IFrame(opts)
}

function IFrame(opts) {
  if (!opts) opts = {}
  this.opts = opts
  this.container = opts.container || document.body
  this.setHTML(opts)
}

IFrame.prototype.parseHTMLOptions = function(opts) {
  if (typeof opts === 'string') opts = {html: opts}
  if (!opts) opts = {}
  if (opts.body || opts.head) {
    if (!opts.body) opts.body = ""
    if (!opts.head) opts.head = ""
    opts.html = '<!DOCTYPE html><html><head>' + opts.head + '</head><body>' + opts.body + '</body></html>'
  }
  return opts
}

IFrame.prototype.remove = function() {
  if (this.iframe) this.container.removeChild(this.iframe)
}

IFrame.prototype.setHTML = function(opts) {
  opts = this.parseHTMLOptions(opts)
  if (!opts.html) return
  this.remove()
  this.iframe = document.createElement('iframe')
  this.iframe.setAttribute('scrolling', this.opts.scrollingDisabled ? 'no' : 'yes')
  this.iframe.style.width = '100%'
  this.iframe.style.height = '100%'
  this.iframe.style.border = '0'
  this.container.appendChild(this.iframe)
  var content = this.iframe.contentDocument || this.iframe.contentWindow.document
  content.open()
  content.write(opts.html)
  content.close()
}
