const express = require('express');
const router = express.Router();

const ClientController = require('../controller/ClientController');
const ClientValidation = require('../middlewares/ClientValidation');


router.post('/', ClientValidation, ClientController.create);
router.put('/:id', ClientValidation, ClientController.update);
router.get('/', ClientController.all);


module.exports = router;
