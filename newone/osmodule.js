const os = require('os');
const myUrl = new URL('https://example.com:8000/path/name?search=abc#hash');

console.log(myUrl.hostname);  // 'example.com'
console.log(myUrl.port);      // '8000'
console.log(myUrl.pathname);  // '/path/name'
console.log(myUrl.search);    // '?search=abc'
console.log(myUrl.hash);      // '#hash'