var concat = require('concat-stream');

var stream = concat(function (buffer) {
  var s = buffer.toString().split('').reverse().join('');
  process.stdout.write(s);
});

process.stdin.pipe(stream);