const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const profileRoutes = require('./routes/profile.routes');
const contactRoutes = require('./routes/contact.routes');
const statRoutes = require('./routes/stat.routes');

const adminProfileRoutes = require('./routes/admin.profile.routes');
const adminAuthRoutes = require('./routes/admin.auth.routes');
const adminAuth = require('./middleware/adminAuth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.set("trust proxy", 1); 

app.use(cors({
  origin: [
    "https://its-realakshay.vercel.app/",
    "http://localhost:3000"
  ],
  credentials: true,
}));
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.use('/api/profile', profileRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/stat', statRoutes);

// to have admin operations on profile
app.use("/api/admin/auth", adminAuthRoutes);
app.use('/api/admin/profile', adminAuth, adminProfileRoutes);

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('MongoDB connection error:', error);
})