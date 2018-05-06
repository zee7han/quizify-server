
exports.up = function(knex, Promise) {
  return knex.schema.createTable('question_campaign1', function(table) {
    table.increments('id');
    table.string('setid');
    table.integer('campaign_id').unsigned();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('question_campaign');
};
