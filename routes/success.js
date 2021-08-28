const express = require('express');
const router  = express.Router();

const statusController = require('../controllers/statusController');

router.get('/', statusController.success);

module.exports = router;