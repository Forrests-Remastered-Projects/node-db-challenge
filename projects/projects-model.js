const db = require("../data/db");
function getProjects() {
  return db("projects");
}
function getResources() {
  return db("resources");
}
function getTasks() {
  return db("tasks")
    .innerJoin("projects", "projects.id", "tasks.project_id")
    .select(
      "tasks.notes",
      "tasks.completed",
      "projects.name",
      "projects.description"
    );
}
function addProjects(project) {
  return db("projects").insert(project);
}
function addResources(resource) {
  return db("resources").insert(resource);
}

function addTasks(task) {
  return db("tasks").insert(task);
}
module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProjects,
  addResources,
  addTasks
};
