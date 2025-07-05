const path = require('path');
console.log(path.basename('/folder/file.txt'));     // 'file.txt'
console.log(path.dirname('/folder/file.txt'));      // '/folder'
console.log(path.extname('file.txt'));              // '.txt'
console.log(path.join('folder', 'file.txt'));       // 'folder/file.txt'
console.log(path.resolve('folder', 'file.txt'));    // Absolute path