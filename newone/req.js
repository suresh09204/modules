const http = require('http');

http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    console.log('Received body:', body);
    res.end('OK');
  });
}).listen(3000);
