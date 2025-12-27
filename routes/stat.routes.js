const express = require('express');
const { incrementVisitorCount } = require('../controllers/stat.controller');
const router = express.Router();
router.post('/visit', incrementVisitorCount);
module.exports = router;