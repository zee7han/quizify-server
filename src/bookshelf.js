import knex from 'knex';
import bookshelf from 'bookshelf';
import mockKnex from 'mock-knex';

import knexConfig from './knexfile';

let ORM;

if(process.env.RUNNING_ENV === 'testing') {
  let connection = knex(knexConfig[process.env.RUNNING_ENV]);
  let db = mockKnex.mock(connection, 'knex@0.11');
  ORM = bookshelf(db);
  ORM.plugin = jest.fn();
} else {
  ORM = bookshelf(knex(knexConfig[process.env.RUNNING_ENV]));
  ORM.plugin('bookshelf-page');
  }


export default ORM
