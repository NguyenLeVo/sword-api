const sql = require("./db.js");

// constructor
const Task = function (task) {
  this.ID = task.ID;
  this.PerformedByID = task.PerformedByID;
  this.Summary = task.Summary
  this.SubmitDate = task.SubmitDate;
};

Task.create = (newTask, result) => {
  sql.query("INSERT INTO Tasks SET ?", newTask, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created task: ", { id: res.insertId, ...newTask });
    result(null, { id: res.insertId, ...newTask });
  });
};

Task.getAll = (request, result) => {
  let query = "SELECT * FROM Tasks";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tasks: ", res);
    result(null, res);
  });
};

module.exports = Task;
