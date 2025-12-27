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

router.post("/insert/personal", insertPersonalInfo);
router.post("/insert/skill", insertSkillsInfo);
router.post("/insert/education", insertEducationInfo);
router.post("/insert/experience", insertExperienceInfo);
router.post("/insert/project", insertProjectInfo);
router.post("/insert/testimonial", insertTestimonialInfo);

router.put("/update/personal", updatePersonalInfo);
router.put("/update/skill/:id", updateSkillsInfo);
router.put("/update/education/:id", updateEducationInfo);
router.put("/update/experience/:id", updateExperienceInfo);
router.put("/update/project/:id", updateProjectInfo);
router.put("/update/testimonial/:id", updateTestimonialInfo);

router.delete("/delete/skill/:id", deleteSkill);
router.delete("/delete/education/:id", deleteEducation);
router.delete("/delete/experience/:id", deleteExperience);
router.delete("/delete/project/:id", deleteProject);
router.delete("/delete/testimonial/:id", deleteTestimonial);

module.exports = router;
