
const { Todo } = require("../models");
const { User, Category, Tag } = require("../models");

exports.createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);

    }

    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll({
            include: [User, Category, Tag],    
        });
    }

    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findByPk(req.params.id, {
            include: [User, Category, Tag],
        });

        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }

        res.json(todo);
    }

    catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const update = async (req, res) => {
    try {
        const todo = await Todo.findByPk(req.params.id);

        if (!todo) {
            return res.status(404).json({ error: "Todo not found"});
        }

        await todo.update(req.body);
        res.json(todo);
    } 

    catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const deleted = async (req, res) => {
    try {
        const todo = await Todo.findByPk(req.params.id);

        if (!todo) {
            return res.status(404).json({ error: "todo not found"});
        }

        await todo.destroy();
        res.json({ message: "tdo deleted successfully" });
    }

    catch (error) {
        res.json(500).json({ error: error.message });
    }
};

module.exports = [

    update,
    deleted
]