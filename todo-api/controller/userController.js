
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password);
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json(user);
    }

    catch (error) {
        res.status(400).json({error: error.message});
    }
};



const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user.findOne({ where: email });
        if  (!user) return res.status(404).json({ error : "user not found"});

        const valid = await bcrypt.compare(password, user.password );
        if (!valid) return res.status(401).json({ error: "şifre hatalı" });
    }

    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}

module.exports = {
    register,
    loginUser
};
