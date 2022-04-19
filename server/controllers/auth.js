const { Users } = require ("../models")

// Create an user
exports.signUp = async (req, res) => {
    const { username } = req.body;
    await Users.create({
        username : username
    });
    res.json("User successfully created")
};

// Log in an user with username
exports.login = async (req, res) => {
    const { username } = req.body;
    const user = await Users.findOne({ where: { username : username } });
    if (!user) {
        res.json({ error: "User doesn't exist" });       
    } else {
        res.json("User " + username + " successfully logged in");
    }
};