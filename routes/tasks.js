var express = require("express");
var router = express.Router();
const task = require("../controllers/task.controller.js");

// Create a new task
router.post("/", task.create);

// Retrieve all tasks
router.get("/", task.findAll);

module.exports = router;
