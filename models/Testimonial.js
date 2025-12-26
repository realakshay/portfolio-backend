const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    quote: { type: String, required: true },
    author: { type: String, required: true },
    company: { type: String, required: false },
});

module.exports = mongoose.model("Testimonial", testimonialSchema);