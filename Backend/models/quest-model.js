const mongoose=require('mongoose')
const questSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:100
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    difficulty:{
        type:String,
        required:true,
        enum:['Easy','Medium','Hard']
    },
    category:{
        type:String,
        required:true,
        enum:['Recycling','Composting','Energy Conservation','Water Conservation','Transportation','Other']
    },
    image:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    points:{
        type:Number,
        required:true,
    },
})
module.exports=mongoose.model('Quest',questSchema);