"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.list = list;
exports.show = show;
exports.create = create;
exports.update = update;
exports.remove = remove;

var _Country = require("../models/Country");

var _Country2 = _interopRequireDefault(_Country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(request, response) {
    _Country2.default.find({}).exec().then(function (countries) {
        return response.json(countries);
    });
}

function show(request, response) {
    _Country2.default.findById(request.params.id).exec().then(function (country) {
        return response.json(country);
    });
}

function create(request, response) {
    var country = new _Country2.default({
        continent: request.body.continent,
        capital: request.body.capital,
        leader: request.body.leader,
        population: request.body.population,
        currency: request.body.currency
    });
    country.save().then(function (countries) {
        return response.json(countries);
    });
}

function update(request, response) {
    return response.json(_Country2.default[0].continent = request.params.id);
}

function remove(request, response) {
    _Country2.default.findByIdAndRemove(request.params.id).exec().then(function (countries) {
        return response.json(countries);
    });
}