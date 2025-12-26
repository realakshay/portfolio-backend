const Personal = require('../models/Personal');
const Skill = require('../models/Skill');
const Education = require('../models/Education');

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
    // Implementation for inserting skills info
    // { name: "React", iconName: "FaReact", color: "#61DAFB" },
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
    // Implementation for inserting education info
    /** 
     *  title: "Bachelors of Engineering",
      university: "University of Pune",
      date: " Jun 2015 - Jun 2019",
      description: [
        "Focused on Software Development, Data Structures, and Algorithms.",
        "Completed with 8.41 CGPA",
      ],
    */
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

module.exports = { insertPersonalInfo, insertSkillsInfo, insertEducationInfo };