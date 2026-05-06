const quest=require('../models/quest-model');
const user=require('../models/user-model');
const generateQuest=async(req,res)=>{
    try{
        if(!title||!description||!category||!difficulty||!duration||!steps||!rewards){
            res.send("Please Provide all the required fields");
        }
        const ques=await quest.create({
            title,
            description,
            category,
            difficulty,
            duration,
            steps,
            rewards,
        });
        res.status(201).json(ques);
    }
    catch(error){
        res.send(300).json({message:'Internal server error'});
    }
}
const submitQuest=async(req,res)=>{
    try{
        const quest=await quest.findById(questId);
        if(!quest){
            res.send(400).json({message:'Quest not found'});
        }
        const User=await user.findById(req.user);
        if(!User){
            res.send(400).json({message:'User not found'});
        }
        if(User.completedQuest.includes(questId)){
            res.send(400).json({message:'Quest already completd'});
        }
        User.points+=quest.points;
        User.completedQuest.push(quest);
        await User.save();
        await quest.save();
        if(User.points>=1000){
            User.level+=1;
            User.points=0;
            await User.save();
        }
        if(quest.category=='Recycling'){
            User.recycled+=1;
            await User.save();
        }else if(quest.category=='Transporation'){
            User.co2saved+=1;
            await User.save();
        }
        else{
            User.treeplanted+=1;
            await User.save();
        }
        res.status(200).json({message:'Quest completed'});
    }catch(error){
        res.send(300).json({message:'Internal server error'});
    }
}
const getQuest=async(req,res)=>{
    try{
        const quests=await quest.find();
        res.status(200).json(quests);
    }
    catch(error){
        res.send(300).json({message:'Internal server error'});
    }
}
module.exports={generateQuest,submitQuest,getQuest};