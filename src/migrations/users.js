
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_master1', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('username').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('role').notNullable();
    table.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_master');
};
