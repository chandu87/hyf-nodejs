const fs = require("fs");
const start = new Date(); // Start time of the program

//reading files with Sync
const textOneData = fs.readFileSync("text1.txt", "utf8");
const textTwoData = fs.readFileSync("text2.txt", "utf8");
const textThreeData = fs.readFileSync("text3.txt", "utf8");
const textFourData = fs.readFileSync("text4.txt", "utf8");

let totalData = textOneData + textTwoData + textThreeData + textFourData; //combined data from all files

//Create a new array by using split functionality and replace all the new lines with 'no space'
let newDataArray = totalData.replace(/(\r\n|\n|\r)/gm, "").split(" ");
// console.log(newDataArray);
var count = {};
newDataArray.forEach(function(i) {
  count[i] = (count[i] || 0) + 1;        //create a new object elements in count varible  
});

console.log(count);
const end = new Date();  // End time of the program
console.log("Execution time is : ", (end - start));
