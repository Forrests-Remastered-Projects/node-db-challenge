const express = require("express");
const server = express();
server.use(express.json());
const projectsRouter = require("./projects/projects-router");
server.use("/", projectsRouter);

const port = process.env.PORT || 3100;
server.listen(port, console.log(`Server running on ${port}`));
