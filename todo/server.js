const http = require('http');
const port = 5000;
const host = 'localhost';

const server = http.createServer((req, res) => {
  console.log('>>>>>>req<<<<<<', req);
  console.log('>>>>>>res<<<<<<', res);
  res.end('Hello world!');
});

server.listen(port, host, () => {
  console.log('Server is running...');
});
