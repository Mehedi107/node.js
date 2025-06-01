const fs = require('node:fs');

console.log('Task 1...');

fs.writeFile('./asyncFile.txt', 'Overwritten file text', err => {
  if (err) {
    console.error('Task 2...', err);
  } else {
    console.log('Task 2...');
  }
});

fs.readFile('./asyncFile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Task 3...', data);
});

console.log('Task 4...');
