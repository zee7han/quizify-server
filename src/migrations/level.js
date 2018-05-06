exports.up = function(knex, Promise) {
  return knex.schema.createTable('level', function(table) {
    table.increments();
    table.string('level').notNullable();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('level');
};
