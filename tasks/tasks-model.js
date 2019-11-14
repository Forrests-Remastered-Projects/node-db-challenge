const db = require("../data/db");

module.exports = {
  insert,
  getAll
};

function insert(task) {
  return db("tasks").insert(task);
}

function getAll() {
  return db("tasks")
    .innerJoin("projects", "projects.id", "tasks.project_id")
    .select(
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    );
}
