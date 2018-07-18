"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ContactList = exports.Contact = undefined;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const writeFile = _util2.default.promisify(_fs2.default.writeFile);
const readFile = _util2.default.promisify(_fs2.default.readFile);

class Contact {
	constructor(obj) {
		this.name = obj.name;
		this.age = obj.age;
		this.id = obj.id;
	}

	addPhone(number) {

		return this.phoneNumber = number;
	}
	call() {

		if (this.phoneNumber) console.log("Calling " + this.name + " at " + this.phoneNumber);else console.log(this.name + " has no phone number saved.");
	}
	birthday() {

		console.log("Wishing " + this.name + " a happy " + (this.age + 1) + "th birthday!");
	}
}exports.Contact = Contact;
;

class ContactList {
	constructor(filename) {
		this.list = [];
		this.filename = filename;
		this.load();
	}

	addContact(contact) {
		if (contact instanceof Contact) {
			this.list.push(contact);
			console.log("this.list", this.list);
			return this.save(this.list);
		}
	}
	deleteContact(contactId) {
		console.log(contactId);
		console.log(this.list);
		const ids = this.list.map(item => {
			return item.id;
		});
		console.log(ids);
		const deleteId = ids.indexOf(contactId);
		console.log(deleteId);
		if (deleteId !== -1) {
			this.list.splice(deleteId, 1);
			console.log("------- List after delete -----------");
			console.log(this.list);
		} else {
			console.log("Item with ID not found");
		}
		//		console.log(this.list.indexOf());
		// console.log(this.list.slice(0,contactId-1));
		// console.log(this.list.slice(contactId+1,this.list.length));
	}

	save(list) {
		return writeFile(_path2.default.resolve(__dirname, this.filename), JSON.stringify(list), "utf8").then(() => {
			return list;
		});
	}

	load() {
		const readFilePromise = readFile(_path2.default.resolve(__dirname, this.filename), "utf8");

		return readFilePromise.then(fileString => {
			this.list = JSON.parse(fileString).map(contactObj => new Contact(contactObj));

			return Promise.resolve(null);
		});
		// return new Promise((resolve, reject) => {
		// 	readFilePromise
		// 	.then(fileString => {
		// 		this.list = JSON.parse(fileString)
		// 		.map(contactObj => new Contact(contactObj));

		// 		resolve(null);
		// 	});
		// });
	}
}exports.ContactList = ContactList;
;
//# sourceMappingURL=ContactList.js.map