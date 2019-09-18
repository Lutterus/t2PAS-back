const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

//adicionar pessoas
router.post('/', controller.post);

//rotas para ambos
router.get('/todos', controller.getTodosNomes);
router.get('/getByNome/:nome', controller.getByNome);

//aluno
router.put('/:nome', controller.putInscreverse);
router.post('/time/:nome', controller.postTime);

//professor
router.get('/inscritos', controller.getInscritos);
router.post('/avaliacao/:nome', controller.postAvaliacao);


module.exports = router;