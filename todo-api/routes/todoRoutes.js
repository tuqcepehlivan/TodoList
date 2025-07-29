
const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");

router.post("/", todoController.createTodo);

router.get("/", todoController.getTodos);

router.get("/", todoController.getTodoById);

router.put("/:id", todoController.update);

router.delete("/:id", todoController.delete);

module.exports = router;