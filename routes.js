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
    ctx.partial = fs.readFileSync('./templates/team.html').toString()
    ctx.onrender = function () {
      var gravatar = require('gravatar')
      var peeps = document.querySelectorAll('.content-card-small-avatar')
      for (var i = 0; i < peeps.length; i++) {
        var peep = peeps[i]
        var username = peep.getAttribute('data-user')
        if (!username) continue
        peep.setAttribute('style', "background-image: url('https://github.com/" + username + ".png')")
      }
    }
    next()
  }
}