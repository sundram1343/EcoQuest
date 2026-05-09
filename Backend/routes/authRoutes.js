const express=require('express');
const router=express.Router();
const {registerUser,loginUser,getData,logout}=require('../controllers/authController');
const protect=require('../middleware/authMiddleware');
router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/logout',logout);
router.get('/getData',protect,getData);
module.exports=router;