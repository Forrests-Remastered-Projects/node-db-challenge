exports.up = function(knex) {
  return knex.schema.createTable("projects_resources", tbl => {
    tbl
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects");
    tbl
      .integer("resource_id")
      .notNullable()
      .references("id")
      .inTable("resources");
    tbl.primary(["project_id", "resource_id"]);
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects_resources");
};
