const db = require("../data/db");
function getProjects() {
  return db("projects");
}

function getProjectbyId(id) {
  return db("projects").where({ id });
}

function getResources(projectId) {
  return db("resources")
    .join("project_resources", "resources.id", "project_resources.resource_id")
    .where({ "project_resources.project_id": projectId });
}

function getResourceById(id) {
  return db("resources").where({ id });
}

function getTasks(projectId) {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select("tasks.*", "project_name", "project_description")
    .where({ "tasks.project_id": projectId });
}

function addProjects(project) {
  return db("projects").insert(project);
}
function addResources(projectId, resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => {
      return db("project_resources").insert({
        project_id: projectId,
        resource_id: id
      });
    })
    .catch(() => {
      return findResourceById(id);
    });
}

function addTasks(id, task) {
  return db("tasks")
    .where({ task_id: id })
    .insert(task)
    .then(id => {
      return getProjectbyId(id);
    });
}

module.exports = {
  getProjects,
  getProjectbyId,
  getResources,
  getResourceById,
  getTasks,
  addProjects,
  addResources,
  addTasks
};
