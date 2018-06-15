let fs = require('fs');
let util = require('util');

const start = new Date();
const readFileP = util.promisify(fs.readFile);

//Creating readFile promises
const readTexOne = readFileP("text1.txt", "utf8");
const readTexTwo = readFileP("text2.txt", "utf8");
const readTexthree = readFileP("text3.txt", "utf8");
const readTexFour = readFileP("text4.txt", "utf8");

Promise.all([readTexOne, readTexTwo, readTexthree, readTexFour]).then((data)=>{

    //Create a new array by using split functionality and replace all the new lines with 'no space'
    var arrayData = data.join(" ").replace(/(\r\n|\n|\r)/gm,"").split(" ");
    var count = {};
    arrayData.forEach(function(i) { count[i] = (count[i]||0) + 1;});  //create a new object elements in count varible
    console.log(count);
    const end = new Date();
    console.log("Execution time is : ", (end - start));
}).catch(()=>{
    console.log("error");
});
