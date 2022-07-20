const jwt = require("jsonwebtoken");


module.exports = function verified(req, res, next){
    const token = req.header("token");

    if(!token) return res.status(401).send("Access Denied");

    try{
        const userVerified = jwt.verify(token, process.env.SECRET);
        req.user = userVerified;
        next();
    }catch(err){
        res.status(400).send("Invalid token")
    }
}