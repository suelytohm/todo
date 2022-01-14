const ClientModel = require('../model/ClientModel');

const ClientValidation = async(req, res, next) => {
    const { type, name, description, phone, rua, numero, bairro, cidade, estado, niver } = req.body;

    if(!type)
        return res.status(400).json({ error: 'Invalid type' });
    else if(!name)
        return res.status(400).json({ error: 'Invalid name' });
    else if(!description)
        return res.status(400).json({ error: 'Invalid description' });       
    else if(!phone)
        return res.status(400).json({ error: 'Invalid phone' });   
    else if(!rua)
        return res.status(400).json({ error: 'Invalid rua' });
    else if(!bairro)
        return res.status(400).json({ error: 'Invalid bairro' });
    else if(!cidade)
        return res.status(400).json({ error: 'Invalid cidade' });
    else if(!estado)
        return res.status(400).json({ error: 'Invalid estado' });
    else if(!numero)
        return res.status(400).json({ error: 'Invalid numero' }); 
    else if(!niver)
        return res.status(400).json({ error: 'Invalid niver' });      
        
    else{
        let exists;

        if(req.params.id){
            exists = await ClientModel.findOne({ 
                '_id': { '$ne': req.params.id }
            });
        }

        next();
    }    

}

module.exports = ClientValidation;