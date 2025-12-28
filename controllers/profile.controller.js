const Personal = require("../models/Personal");
const Skill = require("../models/Skill.js");
const Education = require("../models/Education.js");
const Experience = require("../models/Experience.js");
const Testimonial = require("../models/Testimonial.js");
const Project = require("../models/Project");

const getCompleteProfile = async (req, res) => {
    try{
        const personal = await Personal.findOne({}).select("-__v");
        const skills = await Skill.find({}).select("-__v");
        const education = await Education.find({}).select("-__v");
        const experience = await Experience.find({}).select("-__v");
        const testimonials = await Testimonial.find({}).select("-__v");
        const projects = await Project.find({}).select("-__v");
        res.json({
            personal,
            skills,
            education,
            experience,
            testimonials,
            projects
        });
    }catch(error){
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = { getCompleteProfile };