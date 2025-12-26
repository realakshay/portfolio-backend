const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
    desc: { type: String },
    link: { type: String  },
    tags: [{ type: String }]
});

module.exports = mongoose.model("Project", projectSchema);