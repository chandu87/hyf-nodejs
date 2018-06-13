let fs = require('fs');
let util = require('util');

fs.readFile("text1.txt", 'utf8', (err, data)=>{
    if(err) throw err;
console.log(data);
});