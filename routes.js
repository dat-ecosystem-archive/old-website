var fs = require('fs')

module.exports = {
  splash: function (ctx, next) {
    ctx.partial = fs.readFileSync('./templates/splash.html').toString();
    next()
  },
  about: function (ctx, next) {
    ctx.partial = fs.readFileSync('./templates/about.html').toString()
    next()
  },
  team: function (ctx, next) {
    ctx.template = require('./templates/team.html').toString()
    next()
  }
};