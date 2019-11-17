const express = require('express');
const router = express.Router();
const controller = require('../controllers/Facade');

//adicionar pessoas
router.post('/addPessoa', controller.postAddPessoa);

//adicionar time
router.post('/addTime', controller.postAddTime);

//rotas para ambos
router.get('/todosAlunos', controller.getTodosAlunos);
router.get('/todosTimes', controller.getTodosTimes);
router.get('/getByNome/:nome', controller.getByNome);

//aluno
router.get('/inscrever/:nome', controller.getInscreverse);
router.get('/desInscrever/:nome', controller.getDestInscreverse);
router.get('/myTime/:nome', controller.getMyTime);
router.get('/cleanTime/:nome', controller.getCleanTime);
router.post('/editTime/:nome', controller.postEditTime);

//professor
router.get('/timesInscritos', controller.getTimesInscritos);
router.get('/timeInscrito/:nome', controller.getTimeInscrito);
router.post('/avaliacao/:nome', controller.postAvaliacao);


module.exports = router;