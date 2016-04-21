var split = require('split');
var through = require('through2');

var isOdd = true;
var stream = through(write);

function write (line, _, next) {
  if(isOdd) {
    this.push(line.toString().toLowerCase() + "\n");
    isOdd = false;
  } else {
    this.push(line.toString().toUpperCase() + "\n");
    isOdd = true;
  }
  next();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
