var page = require('page')
var dom = require('dom')
var routes = require('./routes.js')
var fs = require('fs')
var mustache = require('mustache').render

function index (ctx, next) {
  // default for all pages
  ctx.onrender = function () {}
  ctx.data = {}
  next()
}

function render(ctx, next) {
  var target = dom('#content')
  var compiled = mustache(ctx.partial, ctx.data)
  target.html(compiled)
  ctx.onrender()
}

page('*', index)
page('/', routes.splash)
page('/about', routes.about)
page('/team', routes.team)

page('*', render)
page()
