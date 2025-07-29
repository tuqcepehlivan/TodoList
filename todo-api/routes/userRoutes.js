
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");



router.post("/", userController.register);
router.post("/", userController.login);

router.get("/", userController.getUsers);


module.exports = router;