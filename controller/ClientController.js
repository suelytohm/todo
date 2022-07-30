const ClientModel = require('../model/ClientModel');
const moment = require('moment');
const today =  moment();


const current = new Date();
const mes = current.getMonth() + 1;
const dia = current.getDate();
let hoje = "0";

if(mes.toString().length == 1){
    hoje = "0" + mes + "-" + dia;
}else{
    hoje = mes + "-" + dia;
}


class ClientController {

    async create(req, res) {
        const client = new ClientModel(req.body);
        await client
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async update(req, res) {
        await ClientModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
                .then(response => {
                    return res.status(200).json(response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                });
    }


    async all(req, res){
        await ClientModel.find()
            .sort('name')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async show(req, res) {
        await ClientModel.findById(req.params.id)
        .then(response => {
            if(response){
                return res.status(200).json(response);
            }else{
                return res.status(404).json({error:'Cliente não encontrado!'})
            }
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }



    async niver(req, res) {
        await ClientModel.find(
            {'niver': { $regex: '.*' + hoje + '.*' }}, function(error, data) {
            if(error)
                console.log(error);
            else{
                return res.status(200).json(data);
            }
        })
    }

}

module.exports = new ClientController();
// test