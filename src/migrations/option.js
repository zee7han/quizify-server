exports.up = function(knex, Promise) {
  return knex.schema.createTable('option', function(table) {
    table.increments();
    table.string('option').notNullable();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('option');
};
