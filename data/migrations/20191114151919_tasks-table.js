exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
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
      .inTable("projects");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects").dropTableIfExists("tasks");
};
