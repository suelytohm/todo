const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    type: {type: Number, required: true},
    name: {type: String,  required: true},
    description: {type: String, required: true},
    phone: {type: String, required: false},
    rua: {type: String, required: false},
    bairro: {type: String, required: false},
    numero: {type: Number, required: false},
    cidade: {type: String, required: false},
    estado: {type: String, required: false},
    niver: {type: String, default: false},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Client', ClientSchema);