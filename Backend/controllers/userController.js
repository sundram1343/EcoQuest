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
module.exports={profile,updateProfile,updateProfilePicture};