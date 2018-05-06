exports.up = function(knex, Promise) {
  return knex.schema.createTable('type', function(table) {
    table.increments();
    table.string('type').notNullable();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('type');
};
