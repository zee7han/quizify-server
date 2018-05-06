// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.PRODUCTION_DATABASE_HOST,
      user: process.env.PRODUCTION_DATABASE_USER,
      password: process.env.PRODUCTION_DATABASE_PASSWORD,
      database: process.env.PRODUCTION_DATABASE_NAME
    },
    pool: {
      min: 10,
      max: 50
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  testing: {
    client: 'mysql',
    debug: false
},


  production: {
    client: 'mysql',
    connection: {
      host: process.env.PRODUCTION_DATABASE_HOST,
      user: process.env.PRODUCTION_DATABASE_USER,
      password: process.env.PRODUCTION_DATABASE_PASSWORD,
      database: process.env.PRODUCTION_DATABASE_NAME
    },
    pool: {
      min: 10,
      max: 50
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
