const express = require('express');
const router = express.Router();


const EmpresaController = require('../controller/EmpresaController');
/*
const ClientValidation = require('../middlewares/ClientValidation');

/*
router.post('/', ClientValidation, ClientController.create);
router.put('/:id', ClientValidation, ClientController.update);
router.get('/', ClientController.all);

router.get('/:id', ClientController.show);
router.get('/n/niver', ClientController.teste);
*/

// Pegar Código
router.get('/', EmpresaController.idEmpresa);

// Criar Empresa
router.post('/', EmpresaController.create);

// Alterar Empresa
router.put('/:id', EmpresaController.update);

// Filtrar Empresa
router.get('/filter/:id', EmpresaController.show);


module.exports = router;
