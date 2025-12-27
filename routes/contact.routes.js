const express = require('express');
const {addNewContact} = require("../controllers/contact.controller");

const router = express.Router();
router.post('/insert', addNewContact);

module.exports =  router;