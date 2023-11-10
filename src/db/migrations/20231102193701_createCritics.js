//creates "critics" table
exports.up = function(knex) {
    return knex.schema.createTable("critics", (table) => {
        table.increments("critic_id");
        table.string("preferred_name");
        table.string("surname");
        table.string("organization_name");
        table.timestamps(true, true);
      });
};

//rolls back migration
exports.down = function(knex) {
    return knex.schema.dropTable("critics");
};
