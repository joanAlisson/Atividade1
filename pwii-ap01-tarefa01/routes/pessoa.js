const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');

// Importa o controller
const pessoaController = require('../controllers/pessoaController');

router.get('/', pessoaController.pessoasList);
router.get('/:id', pessoaController.pessoasRead);
router.post('/', verify, pessoaController.pessoasCreate);
router.put('/:id', verify, pessoaController.pessoasUpdate);
router.delete('/:id', verify, pessoaController.pessoasDelete);

module.exports = router;
