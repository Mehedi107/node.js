import http from 'http';

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js server");
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
})

