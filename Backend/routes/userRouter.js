const express=require('express');
const router=express.Router();
const {profile,updateProfile}=require('../controllers/userController');
const protect = require('../middleware/authMiddleware');
router.get('/profile/:userId',protect,profile);
router.post('/updateprofile/:userId',protect,updateProfile);
module.exports=router;