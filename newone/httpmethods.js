const http = require('http');

const server =

http.createServer ((req, res) => {

if (req.method === 'GET' && req.url === '/api') {

res.writeHead (200,

{ 'Content-Type': 'application/json' });

res.end(JSON.stringify({ message: 'Hello from API' }));

} else {

res.writeHead (404);

res.end();

}

});

server.listen(8000, () => {

console.log('API server running on http://localhost:8000'); });