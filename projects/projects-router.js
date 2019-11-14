const router = require("express").Router();
const Projects = require("./projects-model.js");

router.post("/", (req, res) => {
  const project = req.body;

  Projects.insert(project)
    .then(response => {
      console.log("Posting a project", response);
      res.status(201).json({ message: "Project Created!" });
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});

router.get("/", (req, res) => {
  Projects.getAll()
    .then(projects => {
      console.log("Getting a project", projects);

      newProjects = projects.map(proj => {
        if (proj.project_completed === 0) {
          return { ...proj, project_completed: false };
        } else {
          return { ...proj, project_completed: true };
        }
      });

      console.log(newProjects);

      res
        .status(201)
        .json({ message: "Your projects are available!", data: newProjects });
    })
    .catch(err => {
      res.status(500).json({ message: "Server Error", error: err });
    });
});
module.exports = router;
