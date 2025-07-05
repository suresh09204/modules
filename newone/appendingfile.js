const fs = require('fs');
fs.appendFile('example.txt', '\nMore content added.', (err) => {
    if (err) throw err;
    console.log('Content appended.');
});