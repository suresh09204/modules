const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello suri\n');
});

const PORT =  8000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:8000`);
});