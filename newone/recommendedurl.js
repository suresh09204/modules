const { URL } = require('url');

const myUrl = new URL('http://localhost:6500/about?name=John&age=25');

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams);

console.log(myUrl.searchParams.get('name'));
console.log(myUrl.searchParams.get('age'));
