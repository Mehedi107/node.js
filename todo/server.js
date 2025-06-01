const http = require('http');
const port = 5000;
const host = 'localhost';

const dummyData = [
  {
    id: 1,
    title: 'First title',
    description: 'lorem330dsgeetgfewgrtgesefsdfsdfgd',
  },
  {
    id: 2,
    title: 'Second title',
    description: 'lorem330dsgeetgfewgrgesefsdfsdfgd',
  },
  {
    id: 3,
    title: 'Third title',
    description: 'lorem330dsgeetgfewgrtgesefsdfsdfgd',
  },
  {
    id: 4,
    title: 'Fourth title',
    description: 'lorem330dsgeetgfewgrtgsefsdfsdfgd',
  },
];

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {
      'content-type': 'text/plain',
    });
    res.end('server is running...');
  } else if (req.url === '/todos' && req.method === 'GET') {
    res.writeHead(200, {
      'content-type': 'application/json',
      email: 'mehed@gmail.com',
    });
    res.end(JSON.stringify(dummyData));
  } else {
    res.end('Route not found');
  }
});

server.listen(port, host, () => {
  console.log('Server is running...');
});
