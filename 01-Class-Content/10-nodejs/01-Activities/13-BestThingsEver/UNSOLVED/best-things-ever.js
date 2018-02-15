var fs = require('fs');

fs.readFile(process.argv[2], {
  encoding: 'utf-8'
}, function splitAndOutput (err, data) {
  // console.log === process.stdout.write
  if (err) {
    process.stderr.write(err.message);
  }

  var arr = data.split(',');
  var i = 0;
  for ( ; i < arr.length; i++) {
    // process.stdout.write(arr[i] + '\n');
    console.log(arr[i]);
  }
});
