import * as http from "http";
import * as fs from "fs";
// querystring is used to parse url parameters to an object
// also a core module
import * as qs from "querystring";

import { Contact, ContactList } from"./ContactList.js";
// import contactsPage from "../public/contacts.html";
let contacts = new ContactList("./src/contacts.json");

http
.createServer((req, res) => {
	// log the incoming request
	console.log(req.method, req.url);

	if(req.url === '/'){
		res.write("This is the webserver index.")
		return res.end();
	}

	if(req.url === '/add-contact'){
		let body = "";
		req.on("data", chunk => {
	        body += chunk;
	    });

	    req.on("end", () => {
	    	console.log("Received params:", qs.parse(body));
			const name = qs.parse(body).name;
			const age = qs.parse(body).age; //-----------added more contact information
			const place = qs.parse(body).place;

			const contact = new Contact({
				name: name,
				age: age,
				place: place
			});

			return contacts.load()
			.then(() => {
				contacts.addContact(contact);
				contacts.save();
			})
			.then(() => {
				res.write(`Successfully saved contact: ${ contact.name }`);
				res.end();
			})
			.catch((err) => {
				console.log("Error saving contact:", err);
				res.statusCode = 500;
				res.write("Error saving contact.");
				res.end();
			})
	    });
	}else if(req.url == "/all-contacts"){   //-----------All-contacts route
		res.writeHead(200, {"Content-Type": "text/html"}); 
		fs.readFile("./public/contacts.html", function(err, contactsPage){
			if(err){
				console.log(err);
			}else{
			res.write("Display all contacts");
			res.end(contactsPage);
		}
		});
			
	}
	else
	// if none the urls above match, search for file in public folder
		fs.readFile(`./public${ req.url }`, "utf8", (err, data) => {
			if(err){
				console.log("Error reading file:", err);
				res.statusCode = 404;
				res.write("File not found.");
				return res.end();
			}
			// console.log("Data:", data);
			res.write(data);
			res.end();
		});
})
.listen(8080);