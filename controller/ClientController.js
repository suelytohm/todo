const ClientModel = require('../model/ClientModel');
const moment = require('moment');
const today =  moment();

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
        await ClientModel.find()
        //.where('niver.getDate()').equals(today.date())
        //.where('niver.getMonth()').equals(today.month())
        .then(response => {
            console.log(response);
            
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

    async teste(req, res) {
        await ClientModel.find({'name': 'Suelytohm'}, function (err, person) {
            if (err) return handleError(err);
            console.log(person.name, person.niver, person.phone);
          })
          .then(response => {
              return res.status(200).json(response)
          })
          .catch(error => {
              return res.status(500).json(error)
          })
    }

}

module.exports = new ClientController();