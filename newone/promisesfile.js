const fs = require('fs/promises');

async function readFile() {
    try{
        const data = await fs.readFile('data.txt', 'utf8');
        console.log(data);

    } catch (err)
    {
        console.error('Error:', err);

    }
}

readFile();