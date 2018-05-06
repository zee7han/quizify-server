
exports.up = function(knex, Promise) {
  return knex.schema.createTable('question1', function(table) {
    table.increments('id');
    table.string('qstr').notNullable();  //store the question statement
    table.string('qtid').notNullable(); //store the question type like MCQ
    table.string('qchcat').notNullable(); //store the channel category that we get on campaign selection
    table.string('qformat').notNullable(); //store the format like IPL, Test and all
    table.string('qteam').notNullable(); //store the team like India
    table.integer('qcatid').notNullable(); //store the category Id that we will get on campaign selection
    table.integer('qnegMark').notNullable();  // store the negative score like -5,-10
    table.integer('qweightage').notNullable();  //store the weightage of the question like 5,10
    table.integer('qlevel').notNullable(); // store the level of the question like 1,2
    table.string('qgroup').notNullable(); // store the group like batting, bowling, fielding
    table.boolean('qflag').notNullable(); // store true or false if ques sent to pushData API then true otherwise false
    table.string('qopt1').notNullable(); //store the first option
    table.string('qopt2').notNullable(); //store the second option
    table.string('qopt3').notNullable(); //store the third option
    table.string('qopt4').notNullable();  // store the fourth option
    table.integer('qanswer'); //store the correct option
    table.string('setid').notNullable();  //store the quiz name like QUIZ 1
    table.time('qstarttime').notNullable();  //store the time to push question
    table.time('qendtime').notNullable(); //store the time limit to answer the question
  });
};



exports.down = function(knex, Promise) {
  return knex.schema.dropTable('question');
};
