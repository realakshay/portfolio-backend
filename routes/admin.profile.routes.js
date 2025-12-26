const express = require('express');
const { insertPersonalInfo, insertSkillsInfo, insertEducationInfo } = require('../controller/admin.profile.controller');
const router = express.Router();

router.post('/insert/personal', insertPersonalInfo);
router.post('/insert/skill', insertSkillsInfo);
router.post('/insert/education', insertEducationInfo);

module.exports = router;