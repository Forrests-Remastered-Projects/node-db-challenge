const router = require("express").Router();
const Projects = require("./projects-model.js");
const Tasks = require("./projects-model.js");
const Resources = require("./projects-model.js");

router.post("/projects", (req, res) => {
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

router.get("/projects", (req, res) => {
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

router.post("/tasks", (req, res) => {
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

router.get("/tasks", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      console.log("Getting Task", tasks);

      newTasks = tasks.map(task => {
        if (task.task_completed === 0) {
          return { ...task, task_completed: false };
        } else {
          return { ...task, task_completed: true };
        }
      });

      res.status(201).json({ message: "Tasks got!", data: newTasks });
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

router.post("/resources", (req, res) => {
  const resource = req.body;

  Resources.addResources(resource)
    .then(response => {
      console.log("Posting Resource", response);
      res.status(201).json({ message: "RESOURCE Created!" });
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

router.get("/resources", (req, res) => {
  Resources.getResources()
    .then(resources => {
      console.log("Getting Resource", resources);

      res.status(201).json({ message: "Resources got!", data: resources });
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

module.exports = router;
