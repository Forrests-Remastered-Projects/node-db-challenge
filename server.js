const express = require("express");

const server = express();

const projectsRouter = require("./projects/projects-router.js");
const tasksRouter = require("./tasks/tasks-router.js");
const resourcesRouter = require("./resources/resources-router.js");

server.use(express.json());
server.use("/projects", projectsRouter);
server.use("/tasks", tasksRouter);
server.use("/resources", resourcesRouter);

module.exports = server;
