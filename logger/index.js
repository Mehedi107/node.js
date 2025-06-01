const fs = require('fs');

const timeStamp = new Date();
const text = `${process.argv.slice(2).join(' ')} ${timeStamp} \n`;
const path = `${__dirname}\\log.txt`;

if (!text) {
  console.log('>>>>Please provide an input...');
  process.exit(1);
}

fs.appendFile(path, text, err => {
  console.log('>>>>log added to file');
});
