const fs = require('fs');
fs.writeFile('example.txt', 'Hello from Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successful.');
});