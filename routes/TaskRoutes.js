const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');



router.post('/', TaskValidation, TaskController.create);
// Alterar Tarefa
router.put('/:id', TaskValidation, TaskController.update);
// Trazer única tarefa
router.get('/:id', TaskController.show);
// Apagar Tarefa
router.delete('/:id', TaskController.delete);
// Update Done
router.put('/:id/:done', TaskController.done);


// Todas as Tarefas
router.get('/filter/all/:macaddress', TaskController.all);
// Tarefas Atrasadas
router.get('/filter/late/:macaddress',TaskController.late);
// Tarefas de Hoje
router.get('/filter/today/:macaddress',TaskController.today);
// Tarefas da semana
router.get('/filter/week/:macaddress', TaskController.week);
// Tarefas do Mês
router.get('/filter/month/:macaddress', TaskController.month);
// Tarefas do Ano
router.get('/filter/year/:macaddress',TaskController.year);





module.exports = router;
