
import express from 'express';
import { Contact, ContactList} from './ContactList';
const app = express();

const myContactList = new ContactList("./my_list.json");
import bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({extended: false}));
//parse appliation JSON
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("Hello world");
});
app.get("/contacts", function(req, res){
    res.send(myContactList.list);
});
app.get("/test", function(req, res){
    res.send({name: "chandra"});
});
app.post("/contacts", function(req, res){
    // console.log(req.body);
    const contact = new Contact(req.body);
    myContactList.addContact(contact).then(list=> res.send(list));
});
app.patch("/contacts/:contact_id", function(req, res){
    res.send(myContactList.updateContact(req.params.contact_id));
});
app.delete("/contacts/:contact_id", function(req, res){
    res.send(myContactList.deleteContact(req.params.contact_id));
});

app.listen(3000, function(){
    console.log("Server started at : 3000");
});