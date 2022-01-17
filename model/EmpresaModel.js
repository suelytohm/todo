const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
    type: {type: Number, required: true},
    idEmpresa: {type: String,  required: true},
    name: {type: String,  required: true},
    description: {type: String, required: true},
    phone: {type: String, required: false},
    rua: {type: String, required: true},
    bairro: {type: String, required: true},
    numero: {type: Number, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    cnpj: {type: String, required: true},
    responsavel: {type: String, required: true},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Empresa', EmpresaSchema);
