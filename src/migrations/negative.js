exports.up = function(knex, Promise) {
  return knex.schema.createTable('negative', function(table) {
    table.increments();
    table.string('negative').notNullable();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('negative');
};
