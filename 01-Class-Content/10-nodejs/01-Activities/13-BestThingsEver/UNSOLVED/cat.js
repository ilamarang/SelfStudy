// an example of writing commmand-line "cat" program
var fs = require('fs');
var fileToRead = process.argv[2];

fs.readFile(fileToRead, function (err, data) {
  if (err) {
    process.stderr.write(err.message);
  }
  // console.log === process.stdout.write
  process.stdout.write(data);
});
