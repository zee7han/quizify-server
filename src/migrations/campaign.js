
exports.up = function(knex, Promise) {
  return knex.schema.createTable('campaign1', function(table) {
    table.increments();
    table.string('campaign_name').notNullable();
    table.string('channel_name').notNullable();
    table.string('category').notNullable();
    table.string('details').notNullable();
    table.string('status').notNullable();
    table.string('imgUrl').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('campaign');
};
