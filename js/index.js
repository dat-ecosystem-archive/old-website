var hyperdrive = require('hyperdrive')
var pump = require('pump')
var memdb = require('memdb')
var hyperquest = require('hyperquest')
var swarm = require('hyperdrive-archive-swarm')
var data = require('render-data')

var drive = hyperdrive(memdb())

// TODO: make this archive instance a reader instead of a writer
var archive = drive.createArchive({live: false})
var filepath = 'static/img/bids.geojson'
var ws = archive.createFileWriteStream(filepath) // add hello

pump(hyperquest(window.location.href + filepath), ws, function end (err) {
  archive.finalize(function () {
    var link = archive.key.toString('hex')
    var stream = archive.createFileReadStream(filepath)
    var file = {
      name: filepath,
      createReadStream: function () {
        return stream
      }
    }
    data.append(file, '#example', function (err) {
      if (err) throw err
    })

  })
})
