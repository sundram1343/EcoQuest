require('dotenv').config();
const express=require('express');
const connectDB=require('./config/db');
const authRoutes=require('./routes/authRoutes');
const userRoutes=require('./routes/userRouter');
const quizRoutes=require('./routes/authRoutes');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
connectDB();
app.use('/auth',authRoutes);
app.use('/user',userRoutes);
app.use('/quiz',quizRoutes);
app.listen(process.env.PORT,()=>{
    console.log("Server is running on port no. ",process.env.PORT);
})