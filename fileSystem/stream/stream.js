const fs = require('fs');

const readStream = fs.createReadStream('./input.txt', 'utf-8');
const writeStream = fs.createWriteStream('./output.txt', 'utf-8');

// readStream.pipe(writeStream);

readStream.on('data', chunk => {
  console.log(`Received chunk: ${chunk}`);
  // Process the chunk here
  writeStream.write(chunk, err => {
    if (err) return console.log(`something went wrong ${err}`);
  });
});

readStream.on('end', () => {
  console.log('Finished reading the file.');
  writeStream.end();
});

readStream.on('error', err => {
  console.error(`>>>>>Error reading file: ${err}`);
});

writeStream.on('finish', () => {
  console.log('Write complete.');
});
