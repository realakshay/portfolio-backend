const express = require('express');
const { insertPersonalInfo, insertSkillsInfo } = require('../controller/admin.profile.controller');
const router = express.Router();

router.post('/insert/personal', insertPersonalInfo);
router.post('/insert/skill', insertSkillsInfo);

module.exports = router;