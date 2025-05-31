const fs = require('node:fs');

const text = 'Hello Mehedi';

fs.writeFileSync('./file.txt', text);

const data = fs.readFileSync('./file.txt', { encoding: 'utf-8' });

console.log(data);
