exports.up = function(knex, Promise) {
  return knex.schema.createTable('team', function(table) {
    table.increments();
    table.string('team').notNullable();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('team');
};
