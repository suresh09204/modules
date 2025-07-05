const http = require('http');

http.createServer((req, res) => {
  res.write('Hello ');
  res.write('World!');
  res.end();
}).listen(3000);
