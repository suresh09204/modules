const url=require('url');
const myUrl =url.parse('http://localhost:3000/about?name=John&age=25', true);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.query);

