let fs = require('fs');
let util = require('util');

const readFileP = util.promisify(fs.readFile);

const readTexOne = readFileP("text1.txt", "utf8");
const readTexTwo = readFileP("text2.txt", "utf8");
const readTexthree = readFileP("text3.txt", "utf8");
const readTexFour = readFileP("text4.txt", "utf8");

Promise.all([readTexOne, readTexTwo, readTexthree, readTexFour]).then((data)=>{
    console.log(data.join(" "));
}).catch(()=>{
    console.log("error");
});