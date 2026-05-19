const user=require('../models/user-model');
const profile = async (req, res) => {
    try {
        const User = await user.findById(req.user);
        if (!User) {
            return res.status(400).json({
                message: 'User not found'
            });
        }
        return res.status(200).json(User);
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });

    }
}
const updateProfile = async (req, res) => {
    try {

        const User = await user.findById(req.user);

        if (!User) {
            return res.status(400).json({
                message: 'User not found'
            });
        }
        User.name = req.body.name || User.name;
        User.email = req.body.email || User.email;
        User.DOB = req.body.DOB || User.DOB;
        User.Gender = req.body.Gender || User.Gender;
        User.bio = req.body.bio || User.bio;
        User.phoneno = req.body.phoneno || User.phoneno;
        User.location = req.body.location || User.location;
        await User.save();
        return res.status(200).json(User);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
}
const updateProfilePicture = async (req, res) => {
    try {

        const User = await user.findById(req.user);

        if (!User) {
            return res.status(400).json({
                message: 'User not found'
            });
        }
        if (req.file) {
            User.profileImage = req.file.filename;
        }
        await User.save();
        return res.status(200).json(User);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
} 
const getLeaderBoard = async (req, res) => {
  try {
    const users = await user.find({}, { name: 1, profileImage: 1, level: 1, points: 1 });
    const usersWithTotal = users.map(u => ({
      _id: u._id,
      name: u.name,
      profileImage: u.profileImage,
      level: u.level,
      points: u.points,
      totalPoints: u.level * 1000 + u.points
    }));
    usersWithTotal.sort((a, b) => b.totalPoints - a.totalPoints);
    const top10 = usersWithTotal.slice(0, 10).map((u, idx) => ({
      ...u,
      rank: idx + 1
    }));
    const currentUser = usersWithTotal.find(u => u._id.toString() === req.user);
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const rank = usersWithTotal.findIndex(u => u._id.toString() === req.user) + 1;

    return res.status(200).json({
      top: top10,
      userRank: rank,
      userPoints: currentUser.points,
      userLevel: currentUser.level,
      userName: currentUser.name,
      userProfile: currentUser.profileImage,
      userTotalPoints: currentUser.totalPoints
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports={profile,updateProfile,updateProfilePicture,getLeaderBoard};