const express = require("express");
const {
  addNewContact,
  getAllContacts,
} = require("../controllers/contact.controller");

const adminAuth = require('../middleware/adminAuth');

const router = express.Router();
router.post("/insert", addNewContact);
router.get("/all", adminAuth, getAllContacts);

module.exports = router;
