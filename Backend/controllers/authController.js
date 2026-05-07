const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../models/user-model');
const registerUser=async(req,res)=>{
    try{
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please add all fields' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword= await bcrypt.hash(password,process.env.saltRounds);
        const user=await User.create({
            username:name,
            email:email,
            password:hashedPassword
        })
        let token=jwt.sign({id:user._id},process.env.JWT_SECRET);
        if(user){
            res.status(201).json({
                _id:user._id,
                username:user.username,
                email:user.email,
                token
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
        const {username,password}=req.body;
        const user=await User.findOne({username});
        if(!user){
            res.status(401).json({ message: 'Invalid username or password' });
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(401).json({ message: 'Invalid username or password' });
        }
        let token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({
            _id:user._id,
            username:user.username,
            email:user.email,
            token
        })
    }
    catch(error){
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
};
const getData=async(req,res)=>{
    try{
        const user=await User.findById(req.user.id);
        res.status(200).json({
            _id:user._id,
            username:user.username,
            email:user.email
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