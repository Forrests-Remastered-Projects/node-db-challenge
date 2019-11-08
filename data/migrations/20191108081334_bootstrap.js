exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name").notNullable();
      tbl.string("project_description");
      tbl
        .boolean("project_completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("task_description").notNullable();
      tbl.string("task_notes");
      tbl
        .boolean("task_completed")
        .notNullable()
        .defaultTo(false);
      tbl
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("resource_name")
        .notNullable()
        .unique();
      tbl.string("resource_description");
      tbl
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("projects_resources", tbl => {
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
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects_resources");
};
