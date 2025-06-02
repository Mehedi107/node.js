const http = require('http');
const fs = require('fs');

const port = 5000;
const host = 'localhost';
const filePath = `${__dirname}\\db\\todosData.json`;

const server = http.createServer((req, res) => {
  // root route
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {
      'content-type': 'text/plain',
    });
    res.end('server is running...');
  }

  // show all todos
  if (req.url === '/todos' && req.method === 'GET') {
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    res.writeHead(200, {
      'content-type': 'application/json',
    });
    res.end(data);
  }

  // create new todo
  if (req.url === '/todos/create' && req.method === 'POST') {
    let data = '';

    // get data from body in chunk
    req.on('data', chunk => {
      data += chunk;
    });

    // when get all chunks
    req.on('end', () => {
      const parsedData = JSON.parse(data);

      const todos = fs.readFileSync(filePath, { encoding: 'utf-8' });
      const parsedTodos = JSON.parse(todos);

      parsedTodos.push(parsedData);

      fs.writeFileSync(filePath, JSON.stringify(parsedTodos, null, 2));

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(parsedData));
    });

    return;
  }

  // if no route matched
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Route not found');
});

server.listen(port, host, () => {
  console.log('Server is running...');
});
