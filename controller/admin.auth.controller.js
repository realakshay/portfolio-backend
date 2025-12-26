const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    if( email !== process.env.ADMIN_EMAIL){
        return res.status(401).json({ message: "Unauthorized" });
    }
    const isPasswordValid = await bcrypt.compare(password, bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10));
    if(!isPasswordValid){
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = jwt.sign({ role: 'admin'}, process.env.JWT_SECRET, { expiresIn: '1d'});
    res.status(200).json({ token });
}

module.exports = { adminLogin };