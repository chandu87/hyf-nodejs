'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ContactList = require('./ContactList');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

const myContactList = new _ContactList.ContactList("./my_list.json");


app.use(_bodyParser2.default.urlencoded({ extended: false }));
//parse appliation JSON
app.use(_bodyParser2.default.json());

app.get("/", function (req, res) {
    res.send("Hello world");
});
app.get("/contacts", function (req, res) {
    res.send(myContactList.list);
});
app.get("/test", function (req, res) {
    res.send({ name: "chandra" });
});
app.post("/contacts", function (req, res) {
    // console.log(req.body);
    const contact = new _ContactList.Contact(req.body);
    myContactList.addContact(contact).then(list => res.send(list));
});
app.patch("/contacts/:contact_id", function (req, res) {
    res.send("this is a patch request" + req.params.contact_id);
});
app.delete("/contacts/:contact_id", function (req, res) {
    myContactList.deleteContact(req.params.contact_id);
    res.send("this is a delete request => " + req.params.contact_id);
});

app.listen(3000, function () {
    console.log("Server started at : 3000");
});
//# sourceMappingURL=index.js.map