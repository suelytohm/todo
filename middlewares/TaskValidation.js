const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');
 

const TaskValidation = async (req, res, next) => {
    const { macaddress, type, title, description, value, when } = req.body;

    if(!macaddress)
        return res.status(400).json({ error: 'macaddress required' });
    else if (!type)     
        return res.status(400).json({ error: 'type required!'});
    else if (!title)
        return res.status(400).json({ error: 'title required!'});
    else if (!description)
        return res.status(400).json({ error: 'description required!'});
    else if (!value)
        return res.status(400).json({ error: 'value required!'});
    else if (!when)
        return res.status(400).json({ error: 'Time required!'});
    else if(isPast(new Date(when)))
        return res.status(400).json({ error: 'Invalid Time!'});
    else{
        let exists;


        if(req.params.id){
            exists = await TaskModel.findOne(
                { 
                    '_id': {'$ne': req.params.id },
                    'when': { '$eq': new Date(when)}, 
                    'macaddress': {'$in': macaddress}
                });
    
        }else{
            exists = await TaskModel.findOne(
                { 
                    'when': { '$eq': new Date(when)}, 
                    'macaddress': {'$in': macaddress}
                });
        }


        if(exists){
            return res.status(400).json({ error: 'Já existe uma tarefa nesse dia e horário!'});
        }
        next();
    }
}

module.exports = TaskValidation;