const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eraSchema = new Schema({
    era: { type: String, required: true },
    start: { type: Number, required: true },
    end: { type: Number, required: true },
    description: { type: String, required: true },
    answer: { type: String, required: true },
    links: { type: Object}
}, { 
    timestamps: true 
});

const Era = mongoose.model('Era', eraSchema);

module.exports = Era;