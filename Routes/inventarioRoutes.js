const express = require('express');
const router = express.Router();
const inventarioControllers = require('../controllers/inventarioControllers');


router.get('/', inventarioControllers.getAllProducts);


module.exports = router;