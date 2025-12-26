const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    iconName: { type: String, required: true },
    color: { type: String, required: true },
});
module.exports =  mongoose.model("Skill", skillSchema);