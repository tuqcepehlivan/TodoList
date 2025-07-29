
const { Category } = require("../models");


const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    }

    catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const update = async (req, res) => {
    try{
        const category = await Category.findByPk(req.params.id);
        if (!category) return res.status(404).json({ error: "Category not found "});
      
      
        await category.update(req.body);
        res.status(201).json(category);
    }

    catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = [
    createCategory,
    update
]