const http = require('http');

const { URL } = require('url');

const server =

http.createServer ((req, res) => {

const reqUrl = new URL(req.url,`http://${req.headers.host}`);

if (reqUrl.pathname === '/greet' && reqUrl.searchParams.has('name')) {

const name =

reqUrl.searchParams.get('name');

res.writeHead (200,

{ 'Content-Type': 'text/plain' });

res.end(`Hello, ${name}!`);

} else {

res.writeHead (404);

res.end('Not Found');

}

});

server.listen(3000, () =>

console.log('Server running on port 3000'));