var fs = require('fs')
var path = require('path')
var cptar = require('cptar')
var rimraf = require('rimraf')
var mkdirp = require('mkdirp')
var cheerio = require('cheerio')
var marked = require('marked')
var Handlebars = require('handlebars')

var outDir = path.join(__dirname, 'rendered') 

// clear previously rendered stuff
rimraf.sync(outDir)
mkdirp.sync(outDir)
mkdirp.sync(outDir + '/blog')

var posts = require('./posts.js')

var templates = {
  index: readTemplate('index'),
  about: readTemplate('about'),
  blog: readTemplate('blog'),
  splash: readTemplate('splash'),
  team: readTemplate('team'),
  docs: readTemplate('docs')
}

function readTemplate (file) {
  return fs.readFileSync('./templates/' + file + '.html').toString()
}

var renderedFrontPost = false

posts.forEach(function (post) {
  var dom = cheerio.load(templates.index)
  var content = marked(fs.readFileSync('posts/' + post.name + '.md').toString())
  var rendered = Handlebars.compile(templates.blog)({posts: posts, content: content, post: post})
  dom('#content').html(rendered)
  fs.writeFileSync(outDir + '/blog/' + post.name + '.html', dom.html())
  if (post.date && !renderedFrontPost) {
    renderedFrontPost = true
    fs.writeFileSync(outDir + '/blog/index.html', dom.html())
  }
})

renderStatic(templates.splash, 'index.html')
renderStatic(templates.about, 'about.html')
renderStatic(templates.team, 'team.html')
renderStatic(templates.docs, 'docs.html')

// copy static stuff
cptar('./static', outDir + '/static', function (err) {
  if (err) throw err
})

function renderStatic (template, target) {
  var dom = cheerio.load(templates.index)
  dom('#content').html(template)
  fs.writeFileSync(outDir + '/' + target, dom.html())
}

// var routes = [
//   {
//     url: '/',
//     template: fs.readFileSync('./templates/splash.html').toString(),
//     onrender: function (params) {
//       $('.tabs a').click(function (e) {
//         e.preventDefault()
//         $(this).tab('show')
//       })
//       hljs.initHighlightingOnLoad()
//     }
//   },
//   {
//     url: '/blog',
//     template: fs.readFileSync('./templates/blog.html').toString(),
//     data: function (params, cb) {
//       cb({posts: posts})
//     },
//     onrender: function (data) {
//       $('a.load-document')[0].click()
//       switchNav('/blog')
//     }
//   },
//   {
//     url: '/blog/:name',
//     template: fs.readFileSync('./templates/blog.html').toString(),
//     data: function (params, cb) {
//       cb({posts: posts})
//     },
//     onrender: function (data) {
//       xhr('/posts/' + data.name + '.md', function (err, res, data) {
//         $('#post').html(marked(data))
//       })
//       $('#' + data.name).addClass('active')
//       switchNav('/blog')
//     }
//   },
//   {
//     url: '/about',
//     template: fs.readFileSync('./templates/about.html').toString(),
//     onrender: function (data) { switchNav('/about') }
//   },
//   {
//     url: '/docs',
//     template: fs.readFileSync('./templates/docs.html').toString(),
//     data: function (params, cb) {
//       var url = 'https://raw.githubusercontent.com/maxogden/dat/master/readme.md'
//       xhr(url, function (err, res, data) {
//         var readme = marked(data)
//         return cb({readme: readme})
//       })
//     },
//     onrender: function (data) { switchNav('/docs') }
//   },
//   {
//     url: '/team',
//     template: fs.readFileSync('./templates/team.html').toString(),
//     onrender: function (params) {
//       var gravatar = require('gravatar')
//       var peeps = document.querySelectorAll('.content-card-small-avatar')
//       for (var i = 0; i < peeps.length; i++) {
//         var peep = peeps[i]
//         var username = peep.getAttribute('data-user')
//         if (!username) continue
//         peep.setAttribute('style', "background-image: url('https://github.com/" + username + ".png')")
//       }
//       switchNav('/team')
//     }
//   }
// ]
