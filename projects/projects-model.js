const db = require("../data/db");
function getProjects() {
  return db("projects");
}

function getProjectbyId(id) {
  return db("projects").where({ id });
}

function getResources() {
  return db("resources");
}
function getTasks(id) {
  return db("projects")
    .join("tasks", "tasks.project_id", "projects.id")
    .select(
      "projects.project_name",
      "projects.project_description",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.completed",
      "tasks.project_id"
    )
    .where({ project_id: id });
}

function addProjects(project) {
  return db("projects").insert(project);
}
function addResources(resource) {
  return db("resources").insert(resource);
}

function addTasks(id, task) {
  return db("tasks").insert({ ...task, project_id: id });
}

module.exports = {
  getProjects,
  getProjectbyId,
  getResources,
  getTasks,
  addProjects,
  addResources,
  addTasks
};
