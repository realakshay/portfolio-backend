const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    university: { type: String, required: true },
    date: { type: String, required: true },
    description: [{ type: String }],
});
module.exports = mongoose.model("Education", educationSchema);