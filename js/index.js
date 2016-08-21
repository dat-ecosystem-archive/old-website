var hyperdrive = require('hyperdrive')
var memdb = require('memdb')
var swarm = require('hyperdrive-archive-swarm')

var drive = hyperdrive(memdb())
var archive = drive.createArchive()

// var ws = archive.createFileWriteStream('hello.txt') // add hello.txt
//
// ws.write('hello')
// ws.write('world')
// ws.end()
//
// var link = archive.key.toString('hex')
// console.log(link)

//document.getElementById('example').innerHTML = link

//swarm(archive)
