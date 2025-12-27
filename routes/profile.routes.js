const express = require('express');
const { getCompleteProfile } = require("../controllers/profile.controller");

const router = express.Router();

router.get("/", getCompleteProfile);

module.exports = router;