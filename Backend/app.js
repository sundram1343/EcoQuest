require('dotenv').config();
const express=require('express');
const connectDB=require('./config/db');
const authRoutes=require('./routes/authRoutes');
const userRoutes=require('./routes/userRouter');
const questRoutes=require('./routes/questRoutes');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'));
connectDB();
app.use('/auth',authRoutes);
app.use('/user',userRoutes);
app.use('/quest',questRoutes);
app.listen(process.env.PORT,()=>{
    console.log("Server is running on port no. ",process.env.PORT);
})