const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const presidentSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    president: {
        type: String,
        required: true
    },
    birth_year: {
        type: String,
        required: true
    },
    death_year: {
        type: String, 
        required: true
    },
    took_office: {
        type: String,
        required: true
    },
    left_office: {
        type: String,
        required: true
    },
    party: {
        type: String,
        required: true
    },
    info: { 
        type: String 
    },
    links: { 
        type: Object
    }
});

const President = mongoose.model('President', presidentSchema);

module.exports = President;
