const User = require('../model/User');

const handleLogout = async (req, res) => {
    // On client, also delete the access token

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //no content
    const refreshToken = cookies.jwt;

    // Is refreshToken in the database?
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
        return res.sendStatus(204);
    }
    
    // Delete the refreshToken in db
    foundUser.refreshToken = "";
    const result = await foundUser.save();
    console.log(result);

    // In production, both when you send a cookie and when you delete a cookie, you should set the secure flag to true.
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true }); // secure: true - only send over https
    res.sendStatus(204);
};

module.exports = { handleLogout };