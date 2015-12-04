var fs = require('fs')
var xhr = require('xhr')
var marked = require('marked')
var Handlebars = require('handlebars')
var templater = require('page-router')

var $ = jQuery = require('jQuery')
var posts = require('./posts.js')
var tabs = require('./static/js/tab.js')

var routes = [
  {
    url: '/',
    template: fs.readFileSync('./templates/splash.html').toString(),
    onrender: function (params) {
      $('.tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
      })
      hljs.initHighlightingOnLoad()
    }
  },
  {
    url: '/blog',
    template: fs.readFileSync('./templates/blog.html').toString(),
    data: function (params, cb) {
      cb({posts: posts})
    },
    onrender: function () {
      $('.load-document').each(function (i, item) {
        $(item).click(function (event) {
          var name = $(this).attr('href')
          xhr('/posts/' + name + '.md', function (err, res, data) {
            $('#post').html(marked(data))
          })
          $('.active').removeClass('active')
          $('#' + name).addClass('active')
          window.scrollTo(0,0);
          event.preventDefault()
          event.stopPropagation()
        })
        if (i === 0) item.click()
      })
    }
  },
  {
    url: '/about',
    template: fs.readFileSync('./templates/about.html').toString()
  },
  {
    url: '/docs',
    template: fs.readFileSync('./templates/docs.html').toString(),
    data: function (params, cb) {
      var url = 'https://raw.githubusercontent.com/maxogden/dat/master/readme.md'
      xhr(url, function (err, res, data) {
        var readme = marked(data)
        return cb({readme: readme})
      })
    }
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

templater('#content', routes, function (source, data) {
  var template = Handlebars.compile(source)
  return template(data)
})
