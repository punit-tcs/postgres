const jwt = require("jsonwebtoken");

const auth = async(req,res,next)=>{
    try{
        const token = req.headers.token;
        console.log(token);
        const veriiuser = await jwt.verify(token, process.env.SECRETE_KEY)
        console.log(veriiuser);
        req.body.email = veriiuser.email

        next();

    }catch(error){
        res.status(401).send(error)
        console.log("authentication error",error);
    }
}

module.exports = auth;