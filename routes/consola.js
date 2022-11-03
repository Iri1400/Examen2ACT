const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/consola')

//router.post('/create', consolaController.createProduct);
//router.post('/read', consolaController.readProduct);
router.post('/create', consolaController.createProduct);
router.post('/read', consolaController.readProduct);

module.exports = router;
