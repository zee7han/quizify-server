exports.up = function(knex, Promise) {
  return knex.schema.createTable('weightage', function(table) {
    table.increments();
    table.string('weightage').notNullable();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('weightage');
};
