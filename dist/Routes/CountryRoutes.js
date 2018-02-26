"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _CountriesController = require("../Controllers/CountriesController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get("/countries", _CountriesController.list);
router.get("/countries/:id", _CountriesController.show);
router.post("/countries", _CountriesController.create);
router.put("/countries/:id", _CountriesController.update);
router.delete("/countries/:id", _CountriesController.remove);

exports.default = router;