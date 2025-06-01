const http = require('http');
const port = 5000;
const host = 'localhost';

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Root route');
  } else if (req.url === '/todos' && req.method === 'GET') {
    res.end('All todos');
  } else {
    res.end('Route not found');
  }
});

server.listen(port, host, () => {
  console.log('Server is running...');
});
