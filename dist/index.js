"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _CountryRoutes = require("./Routes/CountryRoutes");

var _CountryRoutes2 = _interopRequireDefault(_CountryRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

_mongoose2.default.set("debug", true);
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect("mongodb://audiomuse:Nbs76gf$@ds227168.mlab.com:27168/aca-heroku");
app.use(_bodyParser2.default.json());

var MONGODB_URI = process.env.MONGODB_URI;
_mongoose2.default.connect(MONGODB_URI);

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Listening on port:" + port);
});

app.use(_CountryRoutes2.default);