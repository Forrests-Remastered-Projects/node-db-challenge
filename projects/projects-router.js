const router = require("express").Router();
const Projects = require("./projects-model.js");
const Tasks = require("./projects-model.js");
const Resources = require("./projects-model.js");

router.post("/", (req, res) => {
  const project = req.body;

  Projects.addProjects(project)
    .then(response => {
      console.log("Posting project", response);
      res.status(201).json({ message: "Project Created!" });
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      console.log("Getting Project", projects);

      newProjects = projects.map(proj => {
        if (proj.project_completed === 0) {
          return { ...proj, project_completed: false };
        } else {
          return { ...proj, project_completed: true };
        }
      });

      console.log(newProjects);

      res.status(201).json({ message: "Projects got!", data: newProjects });
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

router.post("/", (req, res) => {
  const task = req.body;

  Tasks.addTasks(task)
    .then(response => {
      console.log("Posting Task", response);
      res.status(201).json({ message: "Task Created!" });
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

module.exports = router;
