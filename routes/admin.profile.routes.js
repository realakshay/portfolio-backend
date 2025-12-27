const express = require("express");
const {
  insertPersonalInfo,
  insertSkillsInfo,
  insertEducationInfo,
  insertExperienceInfo,
  insertProjectInfo,
  insertTestimonialInfo,
  updatePersonalInfo,
  updateSkillsInfo,
  updateEducationInfo,
  updateExperienceInfo,
  updateProjectInfo,
  updateTestimonialInfo,
  deleteSkill,
  deleteEducation,
  deleteExperience,
  deleteProject,
  deleteTestimonial
} = require("../controller/admin.profile.controller");
const router = express.Router();

router.post("/personal", insertPersonalInfo);
router.put("/personal", updatePersonalInfo);

router.post("/skill", insertSkillsInfo);
router.put("/skill/:id", updateSkillsInfo);
router.delete("/skill/:id", deleteSkill);

router.post("/education", insertEducationInfo);
router.put("/education/:id", updateEducationInfo);
router.delete("/education/:id", deleteEducation);

router.post("/experience", insertExperienceInfo);
router.put("/experience/:id", updateExperienceInfo);
router.delete("/experience/:id", deleteExperience);

router.post("/project", insertProjectInfo);
router.put("/project/:id", updateProjectInfo);
router.delete("/project/:id", deleteProject);

router.post("/testimonial", insertTestimonialInfo);
router.put("/testimonial/:id", updateTestimonialInfo);
router.delete("/testimonial/:id", deleteTestimonial);

module.exports = router;
