'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();


app.get("/", function (req, res) {
    res.sendFile(_path2.default.join(__dirname + '/views/index.html'));
});
app.get("/contacts", function (req, res) {
    res.send([32, 32, 3, 54, 33]);
});
app.post("/contacts", function (req, res) {
    res.redirect("/contacts");
});
app.listen(3000, function () {
    console.log("Server started at Port : 3000");
});
//# sourceMappingURL=index.js.map