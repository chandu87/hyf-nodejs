"use strict";

var _http = require("http");

var http = _interopRequireWildcard(_http);

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

var _querystring = require("querystring");

var qs = _interopRequireWildcard(_querystring);

var _ContactList = require("./ContactList.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import contactsPage from "../public/contacts.html";

// querystring is used to parse url parameters to an object
// also a core module
var contacts = new _ContactList.ContactList("./src/contacts.json");

http.createServer(function (req, res) {
	// log the incoming request
	console.log(req.method, req.url);

	if (req.url === '/') {
		res.write("This is the webserver index.");
		return res.end();
	}

	if (req.url === '/add-contact') {
		var body = "";
		req.on("data", function (chunk) {
			body += chunk;
		});

		req.on("end", function () {
			console.log("Received params:", qs.parse(body));
			var name = qs.parse(body).name;
			var age = qs.parse(body).age; //-----------added more contact information
			var place = qs.parse(body).place;

			var contact = new _ContactList.Contact({
				name: name,
				age: age,
				place: place
			});

			return contacts.load().then(function () {
				contacts.addContact(contact);
				contacts.save();
			}).then(function () {
				res.write("Successfully saved contact: " + contact.name);
				res.end();
			}).catch(function (err) {
				console.log("Error saving contact:", err);
				res.statusCode = 500;
				res.write("Error saving contact.");
				res.end();
			});
		});
	} else if (req.url == "/all-contacts") {
		//-----------All-contacts route
		res.writeHead(200, { "Content-Type": "text/html" });
		var obj;
		fs.readFile('./src/contacts.json', 'utf8', function (err, data) {
			if (err) throw err;
			obj = JSON.parse(data);
		});
		fs.readFile("./public/contacts.html", function (err, contactsPage) {
			if (err) {
				console.log(err);
			} else {
				res.write("Display all contacts");
				res.end(obj);
			}
		});
	} else
		// if none the urls above match, search for file in public folder
		fs.readFile("./public" + req.url, "utf8", function (err, data) {
			if (err) {
				console.log("Error reading file:", err);
				res.statusCode = 404;
				res.write("File not found.");
				return res.end();
			}
			// console.log("Data:", data);
			res.write(data);
			res.end();
		});
}).listen(8080);