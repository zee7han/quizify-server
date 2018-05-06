exports.up = function(knex, Promise) {
  return knex.schema.createTable('load_state', function(table) {
    table.increments();
    table.string('state').notNullable();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('load_state');
};
