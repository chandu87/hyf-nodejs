console.log("read.js");

const Contact = require("./Contact.js");
const ContactList = require("./ContactList");

let person1 = new Contact("Richard", "30", "");
let person2 = new Contact("Mat", "30", "74837383");

const list = new ContactList("hyf-contacts.json");

// Adding data to Contact list
list.add(person1);
list.add(person2);

// Saving data to a file
list.save();

// Reading data from file and making them instace of Contact class
list.load();

//Check data whether it is instace of Contact class
setTimeout(function() {
  console.log(list.loadedData);
  console.log("Loaded data is instace of Contact : ",list.loadedData[0] instanceof Contact);
}, 1000);
