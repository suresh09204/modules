var fs = require('fs')
fs.readFile("data.txt", function(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log("Async from of data: " + data)
    }
})
console.log("welcome to RSK Helpline")