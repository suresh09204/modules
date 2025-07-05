const { URL } = require('url');

const myUrl = new

URL('http://example.com');

myUrl.pathname = '/docs';

myUrl.searchParams.append('page', '2');

console.log(myUrl.toString()); 