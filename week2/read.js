console.log("read.js");

const Contact = require("./Contact.js");
const ContactList = require("./ContactList");

let person1 = new Contact("Richard", "30", "");
let person2 = new Contact("Mat", "30", "74837383");

const list = new ContactList("hyf-contacts.json");
list.add(person1);
list.add(person2);
list.save();
list.load();
setTimeout(function() {
  console.log(list.loadedData);
  console.log("Loaded data is instace of Contact : ",list.loadedData[0] instanceof Contact);
}, 1000);
