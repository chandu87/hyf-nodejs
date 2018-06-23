const Contact = require("./Contact.js");
const fs = require("fs");
const util = require("util");

const writeFileP = util.promisify(fs.writeFile);
const readFileP = util.promisify(fs.readFile);

class ContactList{
    constructor(fileName){
        this.list = [];
        this.loadedData = [];
        this.fileName = fileName;
    }
    add(contact){
        if(contact instanceof Contact)  
            this.list.push(contact);
        else
        console.log("contact can't be added");
    }
    save(){

        writeFileP(this.fileName, JSON.stringify(this.list))
        .then(()=>{
            console.log("------ File saved ---------");
            console.log(this.list);
        })
        .catch((err)=>{console.log("error saving file" + err)});

    }
    load(){
        readFileP(this.fileName)
        .then((data)=>{
            // console.log(data);
           JSON.parse(data).forEach(contact => {
               this.loadedData.push(new Contact(contact.name, contact.age, contact.phoneNumber));
           });;
           console.log("------ File Loaded ------- ");
        //    console.log(this.loadedData);
        })
        .catch((err)=>{console.log("Error Loading File" + err)});
    }
}

module.exports = ContactList;