import Country from "../models/Country";

export function list(request, response) {
    Country.find({}).exec()
    .then(countries => {
        return response.json(countries);
    });
}

export function show(request, response) {
    Country.findById(request.params.id).exec()
    .then(country => {
        return response.json(countries);
    });
}

export function create(request, response) {
    const country = new Country({
        continent: request.body.continent,
        capital: request.body.capital,
        leader: request.body.leader,
        population: request.body.population,
        currency: request.body.currency
    });
    country.save()
    .then(countries => {
        return response.json(countries);
    });
}

export function update(request, response) {
    return response.json(Country[0].continent = request.params.id);
}

export function remove(request, response) {
    Country.findByIdAndRemove(request.params.id).exec()
    .then(countries => {
        return response.json(countries);
    });
}
