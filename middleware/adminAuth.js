const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized : No token provided" });
    }
    const token = authHeader.split(' ')[1];
    console.log("Received Token:", token);
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);
        if(decoded.role !== 'admin'){
            return res.status(401).json({ message: "Unauthorized : Not Admin" });
        }
        next();
    }catch(error){
        return res.status(401).json({ message: "Unauthorized : Invalid token" });
    }
}

module.exports = adminAuth;