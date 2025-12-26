const express = require('express');
const { getCompleteProfile } = require("../controller/profile.controller");

const router = express.Router();

router.get("/", getCompleteProfile);

module.exports = router;