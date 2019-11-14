exports.up = function(knex) {
  return knex.schema.createTable("resources", tbl => {
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
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources");
};
