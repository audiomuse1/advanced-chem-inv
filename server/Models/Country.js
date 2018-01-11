import mongoose from "mongoose";

const schema = new mongoose.Schema({
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
    },
});

export default mongoose.model("Country", schema);