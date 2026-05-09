const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../models/user-model');
const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please add all fields' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword= await bcrypt.hash(password,parseInt(process.env.SALT_ROUNDS));
        const user=await User.create({
            name:name,
            email:email,
            password:hashedPassword
        })
        let token=jwt.sign({id:user._id},`${process.env.SECRET}`);
        if(user){
            res.status(201).json({
                token,
                user:{
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                }
            })
        }
        else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
};
const loginUser =async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
           return res.status(401).json({ message: 'Invalid username or password' });
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        let token=jwt.sign({id:user._id},`${process.env.SECRET}`);
        res.status(200).json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    }
    catch(error){
        console.log('Login Error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
};
const getData=async(req,res)=>{
    try{
        const user=await User.findById(req.user);
        res.status(200).json({
            name:user.name,
            email:user.email,
            points:user.points,
            co2saved:user.co2saved,
            level:user.level,
            treeplanted:user.treeplanted,
            recycled:user.recycled,
        })
    }
    catch(error){
        console.error('Get Data Error:', error);
        res.status(500).json({ message: 'Server error during get data' });
    }
};
const logout=async(req,res)=>{
    try{
        res.cookie('token','')
        res.status(200).json({ message: 'Logged out successfully' });
    }
    catch(error){
        console.error('Logout Error:', error);
        res.status(500).json({ message: 'Server error during logout' });
    }
}
module.exports={registerUser,loginUser,getData,logout}