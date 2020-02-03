var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  // The filename is simple the local directory and tacks on the requested url
  var filename = __dirname+req.url;

  // This line opens the file as a readable stream
  var readStream = fs.createReadStream("https://cdn-teucrium.nyc3.cdn.digitaloceanspaces.com/5aa1f8c01e5e41d19b0379c914fa5802.xlsx");

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });
}).listen(8080);