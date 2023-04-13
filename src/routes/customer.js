const { Router } = require('express');
const CustomerController = require('../controllers/CustomerControllers');

const router = Router();

router.get('/',CustomerController.getAll)

module.exports = router