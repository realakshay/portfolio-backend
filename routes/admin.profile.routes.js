const express = require('express');
const { insertPersonalInfo, insertSkillsInfo, insertEducationInfo, insertExperienceInfo } = require('../controller/admin.profile.controller');
const router = express.Router();

router.post('/insert/personal', insertPersonalInfo);
router.post('/insert/skill', insertSkillsInfo);
router.post('/insert/education', insertEducationInfo);
router.post('/insert/experience', insertExperienceInfo);

module.exports = router;