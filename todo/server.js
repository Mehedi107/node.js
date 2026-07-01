import http from 'http';

const data = {
  id: 1,
  title: "First title",
  description: "lorem330dsgeetgfewgrtgesefsdfsdfgd"
}

const PORT = 5000;

const server = http.createServer((req, res) => {
  // console.log("Request URL is: ", req.url, "Request method is: ",req.method);
  // res.end("Hello from Node.js server");

  if(req.url === '/todos' && req.method === 'GET') {
    // res.statusCode = 200;
    // res.setHeader("content-type", "plain/text");
    // res.setHeader("email", "mh@gmail.com");

    res.writeHead(200, {
      "content-type" : "application/json",
      "email" : "mehedi@gmail.com"
    })

    res.end(JSON.stringify(data));
  } else if(req.url === '/todos/create-todo' && req.method === 'POST') {
    res.end("Todo created");
  }else {
    res.end("Route not found")
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
})

