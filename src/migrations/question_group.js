
exports.up = function(knex, Promise) {
  return knex.schema.createTable('question_group', function(table) {
    table.increments();
    table.string('gname').notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('question_group');
};
