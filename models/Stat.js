const mongoose = require('mongoose');

const StatSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
    },
    visitors: {
        type: Number,
        default: 0,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Stat', StatSchema);