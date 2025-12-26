const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    date: { type: String, required: true },
    description: [{ type: String }],
    companyNumber: { type: Number, required: true } // to maintain order of experience entries
});
module.exports = mongoose.model("Experience", experienceSchema);