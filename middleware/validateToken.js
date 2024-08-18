const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler( async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization ;

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.Access_token, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error("Not Authorized");
            }
            req.user = decoded.user;
            next();
        })
        if(!token){
            res.status(401);
            throw new Error('Not Authorized, login');
        }
    }else{
        res.status(401);
        throw new Error('Please Login');
    }
});

module.exports =  validateToken;