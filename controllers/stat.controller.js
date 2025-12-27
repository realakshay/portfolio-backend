const Stat = require('../models/Stat');

const incrementVisitorCount = async (req, res) => {
    try {
        const stat = await Stat.findOneAndUpdate(
            { key: 'portfolio' },
            { $inc: { visitors: 1 }, $set: { updatedAt: new Date() } },
            { new: true, upsert: true }
        );
        res.json({ visitors: stat.visitors });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { incrementVisitorCount };