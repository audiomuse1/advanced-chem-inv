"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
    continent: {
        required: true,
        type: String
    },
    capital: {
        required: true,
        type: String
    },
    leader: {
        required: true,
        type: String
    },
    population: {
        required: true,
        type: String
    },
    currency: {
        required: true,
        type: String
    }
});

exports.default = _mongoose2.default.model("Country", schema);