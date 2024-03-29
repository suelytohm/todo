const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress: {type: String, required: true},
    type: {type: Number, required: true},
    title: {type: String,  required: true},
    description: {type: String, required: true},
    value: {type: Number, required: false},
    when: {type: Date, required: true},
    hora: {type: String, required: true},
    done: {type: Boolean, default: false},
    idClient: {type: String,  required: false},
    idEmpresa: {type: String,  required: false},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Task', TaskSchema);