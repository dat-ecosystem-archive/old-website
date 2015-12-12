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
  dom('#' + post.name).addClass('active')
  dom('a[href="/blog"]').addClass('active')
  fs.writeFileSync(outDir + '/blog/' + post.name + '.html', dom.html())
  if (post.date && !renderedFrontPost) {
    renderedFrontPost = true
    fs.writeFileSync(outDir + '/blog/index.html', dom.html())
  }
})

renderStatic(templates.splash, 'index')
renderStatic(templates.about, 'about')
renderStatic(templates.team, 'team')
renderStatic(templates.docs, 'docs')

// copy static stuff
cptar('./static', outDir + '/static', function (err) {
  if (err) throw err
})

function renderStatic (template, target) {
  var dom = cheerio.load(templates.index)
  dom('#content').html(template)
  dom('a[href="/' + target + '"]').addClass('active')
  fs.writeFileSync(outDir + '/' + target + '.html', dom.html())
}
