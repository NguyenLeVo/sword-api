const v4 = require('uuid');
const Task = require("../models/task.model.js");

// Create and Save a new Task
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Task
  const task = new Task({
    ID: v4(),
    PerformedByID: req.body.PerformedByID,
    Summary: req.body.Summary,
    SubmitDate: new Date().toISOString().slice(0, 19).replace('T', ' '),
  });

  // Save Task in the database
  Task.create(task, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Task.",
      });
    else res.send(data);
  });
};

// Retrieve all Tasks from the database.
exports.findAll = (req, res) => {
  Task.getAll((req, res), (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};
