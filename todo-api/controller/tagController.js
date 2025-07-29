
const { Tag } = require("../models");

const createTag = async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        res.status(201).json(tag);
    }

    catch (error) {
        res.status(400).json({ error: error.message });
    }
};