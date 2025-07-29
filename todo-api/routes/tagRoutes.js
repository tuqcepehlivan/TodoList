
const express = require("express");
const router = express.Router();

const tagController = ("../controllers/tagController");

router.post("/", tagController.createTag);

module.exports = router;