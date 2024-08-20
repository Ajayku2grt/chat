const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModels');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const userLogin = asyncHandler( async(req,res) => {
    const {email, password } = req.body;
    if(!email || !password){
        res.status(422);
        throw new Error('All fields are required');
    }
    const user = await userModel.findOne({email});
    if(user && bcrypt.compare(password, user.password)){
        const accessToken = jwt.sign({
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            }, process.env.Access_token,
                {expiresIn: '30m'}
        );

        res.status(200).json({status: true, accessToken:accessToken, message:'Loggged in'});
    }else{
        res.status(422);
        throw new Error('Login failed');
    }
    
});

const userRegister = asyncHandler( async(req,res) => {
    const {name, email, password } = req.body;
    if(!name || !email || !password){
        res.status(422);
        throw new Error('All fields are required');
    }
    const userAvailable = await userModel.findOne({email});
    if(userAvailable){
        res.status(422);
        throw new Error('Email Register Already');
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const Store = await userModel.create({
        name, email, password: hashPassword
    });
    if(Store){
        res.status(200).json({status: true, message:'User Register'});
    }else{
        res.status(422);
        throw new Error('Something Went wrong');
    }
});

const userData = asyncHandler( async (req, res) => {
    res.status(200).json({status: true, user:req.user, message:'User Register'});
});

const userList = asyncHandler( async (req, res) => {
    const userlist = await userModel.find();
    res.status(200).json({status: true, userlist:userlist, message:'User Fetch'});
});

module.exports = {userLogin, userRegister, userData, userList};