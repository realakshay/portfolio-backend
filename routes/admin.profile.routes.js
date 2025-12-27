const express = require("express");
const {
  insertPersonalInfo,
  createSkill,
  createEducation,
  createExperience,
  createProject,
  createTestimonial,
  updatePersonalInfo,
  updateSkill,
  updateEducation,
  updateExperience,
  updateProject,
  updateTestimonial,
  deleteSkill,
  deleteEducation,
  deleteExperience,
  deleteProject,
  deleteTestimonial
} = require("../controllers/admin.profile.controller");
const router = express.Router();

router.post("/personal", insertPersonalInfo);
router.put("/personal", updatePersonalInfo);

router.post("/skill", createSkill);
router.put("/skill/:id", updateSkill);
router.delete("/skill/:id", deleteSkill);

router.post("/education", createEducation);
router.put("/education/:id", updateEducation);
router.delete("/education/:id", deleteEducation);

router.post("/experience", createExperience);
router.put("/experience/:id", updateExperience);
router.delete("/experience/:id", deleteExperience);

router.post("/project", createProject);
router.put("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);

router.post("/testimonial", createTestimonial);
router.put("/testimonial/:id", updateTestimonial);
router.delete("/testimonial/:id", deleteTestimonial);

module.exports = router;
