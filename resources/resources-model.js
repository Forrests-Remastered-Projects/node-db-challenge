const db = require("../data/db");

module.exports = {
  insert,
  getAll
};

function insert(resource) {
  return db("resources").insert(resource);
}

function getAll() {
  return db("resources");
}
