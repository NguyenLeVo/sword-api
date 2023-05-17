const { uuid } = require('uuidv4');
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
    ID: uuid(),
    PerformedByID: req.body.PerformedByID,
    Summary: req.body.Summary,
    SubmitDate: new Date().toISOString().slice(0, 19).replace('T', ' '),
  });

  /*
   * This is a dummy function that represents sending a notification to the manager.
   * What it should be doing is sending a POST message to SQS (Simple Queue Service) or any equivalent service (Kafka, etc.)
   * and let the message broker handle the burden. Since I've spent quite some time on setting up the service, I'm just 
   * console logging at this point. Thanks for understanding
   */
  function sendNotification(data) {
    console.log(`Employee ${data.PerformedByID} has just submitted a Task ${data.ID} on ${data.SubmitDate}`)
  }

  // Save Task in the database
  Task.create(task, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Task.",
      });
    else {
      sendNotification(data);
      res.send(data);
    }
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
