const quest = require("../models/quest-model");
const user = require("../models/user-model");
const generateQuest = async (req, res) => {
  const { title, description, category, difficulty, duration, steps, rewards } =req.body;
  try {
    if (
      !title ||
      !description ||
      !category ||
      !difficulty ||
      !duration ||
      !steps ||
      !rewards
    ) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }
    const ques = await quest.create({
      title,
      description,
      category,
      difficulty,
      duration,
      steps,
      rewards,
    });
    res.status(201).json(ques);
  } catch (error) {
    res.status(300).json({ message: "Internal server error" });
  }
};
const submitQuest = async (req, res) => {
  const { questId } = req.params;
  try {
    const Quest = await quest.findById(questId);
    if (!Quest) {
      return res.status(400).json({ message: "Quest not found" });
    }
    const User = await user.findById(req.user.id);
    if (!User) {
      return res.status(400).json({ message: "User not found" });
    }
    if (User.completedQuest.includes(questId)) {
      return res.status(400).json({ message: "Quest already completd" });
    }
    User.points += Quest.points;
    User.completedQuest.push(Quest.id);
    await User.save();
    if (User.points >= 1000) {
      User.level += 1;
      User.points = 0;
      await User.save();
    }
    if (Quest.category == "Recycling") {
      User.recycled += 1;
      await User.save();
    } else if (Quest.category == "Transportation") {
      User.co2saved += 1;
      await User.save();
    } else {
      User.treeplanted += 1;
      await User.save();
    }
    return res.status(200).json({ message: "Quest completed" });
  } catch (error) {
    return res.status(300).json({ message: "Internal server error" });
  }
};
const getQuest = async (req, res) => {
  try {
    const quests = await quest.find();
    res.status(200).json(quests);
  } catch (error) {
    res.status(300).json({ message: "Internal server error" });
  }
};
module.exports = { generateQuest, submitQuest, getQuest };  