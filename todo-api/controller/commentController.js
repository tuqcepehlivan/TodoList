
const { Comment } = require("../models");

const { User, Todo } = require("../models");

const createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    }

    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            include: [User, Todo]
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleted = async (req, res) => {
    try {
        
        await Comment.destroy({ where: { id: req.params.commentId}});
        res.status(200).json({message: "comment deleted successfully"});
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = [
    createComment,
    getAll,
    deleted
]