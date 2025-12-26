const Personal = require('../models/Personal');
const Skill = require('../models/Skill');
const Education = require('../models/Education');
const Experience = require('../models/Experience');

const insertPersonalInfo = async (req, res) => {
    const { fName, lName, mobile, email, linkedIn, github, shortBio, longBio } = req.body;
    try {
        const personal = new Personal({
            fName,
            lName,
            mobile,
            email,
            linkedIn,
            github,
            shortBio,
            longBio
        });
        await personal.save();
        res.status(201).json({ message: "Personal information inserted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

const insertSkillsInfo = async (req, res) => {
    const { name, iconName, color } = req.body;
    try {
        const skill = new Skill({
            name,
            iconName,
            color
        });
        await skill.save();
        res.status(201).json({ message: "Skill information inserted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

const insertEducationInfo = async (req, res) => {
    const { title, university, date, description } = req.body;
    try {
        const education = new Education({
            title,
            university,
            date,
            description
        });
        await education.save();
        res.status(201).json({ message: "Education information inserted successfully" });
    }catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

const insertExperienceInfo = async (req, res) => {
    const { title, company, date, description, companyNumber } = req.body;
    try {
        const experience = new Experience({
            title,
            company,
            date,
            description,
            companyNumber
        });
        await experience.save();
        res.status(201).json({ message: "Experience information inserted successfully" });
    }catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = { insertPersonalInfo, insertSkillsInfo, insertEducationInfo, insertExperienceInfo };