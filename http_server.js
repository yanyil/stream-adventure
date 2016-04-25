var http = require('http');
var through = require('through2');
var stream = through(write);

function write (buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

var server = http.createServer(function (req, res) {
  if(req.method === 'POST') {
    req.pipe(stream).pipe(res);
  }
});
server.listen(parseInt(process.argv[2]));
