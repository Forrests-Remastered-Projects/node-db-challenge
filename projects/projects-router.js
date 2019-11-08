const router = require("express").Router();
const db = require("./projects-model.js");

router.post("/", (req, res) => {
  const project = req.body;

  db.addProjects(project)
    .then(response => {
      console.log("Posting project", response);
      res.status(201).json({ message: "Project Created!" });
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

router.get("/", (req, res) => {
  db.getProjects()
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

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db.getProjectbyId(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "could not find project by Id" });
    });
});

router.post("/:id/tasks", (req, res) => {
  const task = req.body;
  const { id } = req.params;
  db.addTasks(id, task)
    .then(task => {
      console.log("Posting Task", response);
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  db.getTasks(id)
    .then(tasks => {
      console.log("Getting Task", tasks);

      newTasks = tasks.map(task => {
        if (task.task_completed === 0) {
          return { ...task, task_completed: false };
        } else {
          return { ...task, task_completed: true };
        }
      });

      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

router.post("/resources", (req, res) => {
  db.addResources(req.body)
    .then(result => {
      console.log("Posting Resource", response);
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

router.get("/resources", (req, res) => {
  db.getResources()
    .then(resources => {
      console.log("Getting Resource", resources);

      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db.getResourceById(id).then(resource => {
    if (resource[0]) {
      res.status(200).json(resource);
    } else {
      res.status(500).json({ error: "could not find resource by id" });
    }
  });
});

module.exports = router;
