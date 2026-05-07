const express=require('express');
const router=express.Router();
const {generateQuest,submitQuest,getQuest}=require('../controllers/Questcontroller');
const { protect } = require('../middleware/authMiddleware');
router.post('/generate',protect,generateQuest);
router.post('/:questId/submit',protect,submitQuest);
router.get('/get-quests/:questId',protect,getQuest);
module.exports=router;