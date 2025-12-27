const Personal = require("../models/Personal");
const Skill = require("../models/Skill");
const Education = require("../models/Education");
const Experience = require("../models/Experience");
const Project = require("../models/Project");
const Testimonial = require("../models/Testimonial");

const insertPersonalInfo = async (req, res) => {
  const { fName, lName, mobile, email, linkedIn, github, shortBio, longBio } =
    req.body;
  try {
    const personal = new Personal({
      fName,
      lName,
      mobile,
      email,
      linkedIn,
      github,
      shortBio,
      longBio,
    });
    await personal.save();
    res
      .status(201)
      .json({ message: "Personal information inserted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const insertSkillsInfo = async (req, res) => {
  const { name, iconName, color } = req.body;
  try {
    const skill = new Skill({
      name,
      iconName,
      color,
    });
    await skill.save();
    res
      .status(201)
      .json({ message: "Skill information inserted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const insertEducationInfo = async (req, res) => {
  const { title, university, date, description } = req.body;
  try {
    const education = new Education({
      title,
      university,
      date,
      description,
    });
    await education.save();
    res
      .status(201)
      .json({ message: "Education information inserted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const insertExperienceInfo = async (req, res) => {
  const { title, company, date, description, companyNumber } = req.body;
  try {
    const experience = new Experience({
      title,
      company,
      date,
      description,
      companyNumber,
    });
    await experience.save();
    res
      .status(201)
      .json({ message: "Experience information inserted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const insertProjectInfo = async (req, res) => {
  const { title, subtitle, desc, tags, link } = req.body;
  try {
    const project = new Project({
      title,
      subtitle,
      desc,
      tags,
      link,
    });
    await project.save();
    res
      .status(201)
      .json({ message: "Project information inserted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const insertTestimonialInfo = async (req, res) => {
  const { quote, author, company } = req.body;
  try {
    const testimonial = new Testimonial({
      quote,
      author,
      company,
    });
    await testimonial.save();
    res
      .status(201)
      .json({ message: "Testimonial information inserted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updatePersonalInfo = async (req, res) => {
  try {
    await Personal.findOneAndUpdate(
      {},
      { $set: req.body },
      { new: true, upsert: true, runValidators: true }
    );
    res
      .status(200)
      .json({ message: "Personal information updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updateSkillsInfo = async (req, res) => {
  try {
    await Skill.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true, upsert: true, runValidators: true }
    );
    res
      .status(200)
      .json({ message: "Skills information updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updateEducationInfo = async (req, res) => {
    try {
        await Education.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true, upsert: true, runValidators: true }
      );
        res
        .status(200)
        .json({ message: "Education information updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

const updateExperienceInfo = async (req, res) => {
    try {
        await Experience.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true, upsert: true, runValidators: true }
      );
        res
        .status(200)
        .json({ message: "Experience information updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

const updateProjectInfo = async (req, res) => {
    try { 
        await Project.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true, upsert: true, runValidators: true }
      );
        res
        .status(200)
        .json({ message: "Project information updated successfully" });
    }catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

const updateTestimonialInfo = async (req, res) => {
    try {
        await Testimonial.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true, upsert: true, runValidators: true }
      );
        res
        .status(200)
        .json({ message: "Testimonial information updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

const deleteSkill = async (req, res) =>{
    try{
        await Skill.deleteOne({_id: req.params.id});
        res.status(200).json({ message: "Skill deleted successfully"});
    }catch(error){
        res.status(500).json({ message: "Server Error" });
    }
}

const deleteEducation = async (req, res) =>{
    try{
        await Education.deleteOne({_id: req.params.id});
        res.status(200).json({ message: "Education deleted successfully" });
    }catch(error){
        res.status(500).json({ message: "Server Error" })
    }
}

const deleteExperience = async (req, res) =>{
    try {
        await Experience.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Experience deleted successfully" })
    }catch(error){
        res.status(500).json({ message: "Server Error" })
    }
}

const deleteProject = async (req, res) =>{
    try {
        await Project.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Project deleted successfully" })
    }catch(error){
        res.status(500).json({ message: "Server Error" })
    }
}

const deleteTestimonial = async (req, res) =>{
    try {
        await Testimonial.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Testimonial deleted successfully" })
    }catch(error){
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = {
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
};
