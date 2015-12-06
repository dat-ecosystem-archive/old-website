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
    onrender: function (data) {
      $('a.load-document')[0].click()
      switchNav('/blog')
    }
  },
  {
    url: '/blog/:name',
    template: fs.readFileSync('./templates/blog.html').toString(),
    data: function (params, cb) {
      cb({posts: posts})
    },
    onrender: function (data) {
      xhr('/posts/' + data.name + '.md', function (err, res, data) {
        $('#post').html(marked(data))
      })
      $('#' + data.name).addClass('active')
      siwtchNav('/blog')
    }
  },
  {
    url: '/about',
    template: fs.readFileSync('./templates/about.html').toString(),
    onrender: function (data) { switchNav('/about') }
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
    },
    onrender: function (data) { switchNav('/docs') }
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
      switchNav('/team')
    }
  }
]

templater('#content', routes, function (source, data) {
  var template = Handlebars.compile(source)
  return template(data)
})

function switchNav (location) {
  $('a.active').removeClass('active')
  $('a[href="' + location + '"]').addClass('active')
}
