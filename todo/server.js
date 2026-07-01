import { readFile, writeFile } from 'fs/promises';
import http from 'http';

const allTodo = await readFile("./db/todosData.json", "utf-8");

const PORT = 5000;

const server = http.createServer((req, res) => {
  // console.log("Request URL is: ", req.url, "Request method is: ",req.method);
  // res.end("Hello from Node.js server");

  // ✅ Get all todos
  if(req.url === '/todos' && req.method === 'GET') {
    // res.statusCode = 200;
    // res.setHeader("content-type", "plain/text");
    // res.setHeader("email", "mh@gmail.com");

    res.writeHead(200, {
      "content-type" : "application/json",
      "email" : "mehedi@gmail.com"
    })

    res.end(allTodo);
  // ✅ Create todo
  } else if(req.url === '/todos/create' && req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    })

    req.on('end', async () => {
      const Todos = await readFile("./db/todosData.json", "utf-8");

      const parsedAllTodo = JSON.parse(Todos);
      const parsedBody = JSON.parse(body);

      parsedAllTodo.push(parsedBody)

      const stringifyAllTodo = JSON.stringify(parsedAllTodo, null, 2);

      await writeFile("./db/todosData.json", stringifyAllTodo);

      res.writeHead(201, {
        "Content-Type": "application/json",
      });

      res.end(body);
    })
    
  }else {
    res.end("Route not found")
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
})

