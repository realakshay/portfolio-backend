const express = require("express");
const {
  addNewContact,
  getAllContacts,
} = require("../controllers/contact.controller");

const router = express.Router();
router.post("/insert", addNewContact);
router.get("/all", getAllContacts);

module.exports = router;
