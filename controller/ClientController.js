const ClientModel = require('../model/ClientModel');

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




}

module.exports = new ClientController();