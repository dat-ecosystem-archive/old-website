var templater = require('a-simple-templater')
var fs = require('fs')

var routes = [
  {
    url: '/',
    template: fs.readFileSync('./templates/splash.html').toString()
  },
  {
    url: '/about',
    template: fs.readFileSync('./templates/about.html').toString()
  },
  {
    url: '/team',
    template: fs.readFileSync('./templates/team.html').toString(),
    onrender: function (params) {
      var gravatar = require('gravatar')
      var peeps = document.querySelectorAll('.content-card-small-avatar')
      for (var i = 0; i < peeps.length; i++) {
        var peep = peeps[i]
        var username = peep.getAttribute('data-user')
        if (!username) continue
        peep.setAttribute('style', "background-image: url('https://github.com/" + username + ".png')")
      }
    }
  }
]

templater('#content', routes)