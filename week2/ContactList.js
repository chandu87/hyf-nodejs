const Contact = require("./Contact.js");
const fs = require("fs");
const util = require("util");

const writeFileP = util.promisify(fs.writeFile);

class ContactList{
    constructor(fileName){
        this.list = [];
        this.fileName = fileName;
    }
    add(contact){
        if(contact instanceof Contact)
            this.list.push(contact);
        else
        console.log("contact can't be added");
    }
    save(){
        console.log(this.fileName, this.list);
        writeFileP(this.fileName, JSON.stringify(this.list))
        .then(()=>{console.log("File saved")})
        .catch((err)=>{console.log("error saving file" + err)});

    }
}

module.exports = ContactList;