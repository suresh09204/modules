const  http = require('http')

const myServer = http.createServer((require, Response) => {
  Response.write("welcome to Server")
  Response.end()
})

myServer.listen(5500,  () => {
console.log('Server running at http://localhost:5500'); });