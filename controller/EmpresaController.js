const EmpresaModel = require('../model/EmpresaModel');
const moment = require('moment');
const today =  moment();

class EmpresaController {
    
    async idEmpresa(req, res) {

        let length = 6 // Tamanho do código
        let resultado = ""; // Início do código
        let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Caracteres utilizados
        let caracteresLength = caracteres.length; // Quantidade dos caracteres
    
        for (let i = 0; i< length; i++) {
            resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
        }
        console.log(resultado);

        return res.status(200).json({ "code": resultado});

    }


    async create(req, res) {
        const empresa = new EmpresaModel(req.body);
        await empresa
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async update(req, res) {
        await EmpresaModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }


    async all(req, res) {
        await EmpresaModel.find({
            idEmpresa: {'$in': req.params.idEmpresa }
        })
        .sort('name')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(404).json(error);
        })
    }


    async show(req, res) {
        await EmpresaModel.findById(req.params.id)
        .then(response => {
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({"Error": "Nenhum dado foi encontrado!"});
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    
}

module.exports = new EmpresaController();
