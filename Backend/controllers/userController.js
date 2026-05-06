const user=require('../models/user-model');
const profile=async(req,res)=>{
    try{
        const User=await user.findById(req.user);
        if(!User){
            res.send(400).json({message:'User not found'});
        }
        res.send(200).json(User);
    }catch(error){
        res.send(500).json({message:'Internal Server Error'});
    }
}
const updateProfile=async(req,res)=>{
    try{
        const User=await user.findById(req.user);
        if(!User){
            res.send(400).json({message:'User not found'});
        }
        User.name = req.body.name || User.name;
        User.DOB = req.body.DOB || User.DOB;
        User.Gender = req.body.Gender || User.Gender;
        User.bio = req.body.bio || User.bio;
        User.phoneno = req.body.phoneno || User.phoneno;
        User.location = req.body.location || User.location;
        await User.save();
        res.status(200).json(User);
    }catch(error){
        res.status(500).json({message:'Internal Server Error'});
    }
}
module.exports={profile,updateProfile};