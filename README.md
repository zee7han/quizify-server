# Quizify Server
It is an API collection for the quiz related CMS alongwith the server implemented in Nodejs.

# Getting Started
You can use the above code by cloning the URL https://github.com/zee7han/quizify-server into your local machine.

# Prerequisites
You need for npm and node version 6 & above.

# Installing
1. First move into the project directory and just run the 'npm install' command. It will install all of your dependencies.
2. After that you have to create an '.env' file inside 'src' directory of your project.
3. Set the following environment variable in '.env' file

  export JWT_SECRET 'It will an string'
  export PRODUCTION_DATABASE_HOST 'It will be host name '
  export PRODUCTION_DATABASE_USER 'database username'
  export PRODUCTION_DATABASE_PASSWORD 'database password'
  export PRODUCTION_DATABASE_NAME 'name of database in mysql'
  export RUNNING_ENV 'development'
  export PORT 3003

4. After creating '.env' file, you have to create database into mysql by the same name as 'PRODUCTION_DATABASE_NAME'.
5. After that you have to create the tables into the mysql database. for this you just have to run the following command

    'npm run db:migrate'

6. Above command will run all of your migrations and create tables into the database.

  NOTE: you can use the postgres or sqlite just by making a change in './src/knexfile.js' and change the property 'development.client' to 'postgres' or 'sqlite'.

7. Now it is ready to use and you have to just run a command 'npm start' to run the API server.


# Running Tests
        # Unit Test
            You just running all the unit test by running command  'npm test', But before running this command you have to set you 'RUNNING_ENV' to the 'testing' environment.


        # API Test
            For running all the API test you just have  to install 'newman' globally by running command 'npm install -g newman --save' .

            After that you have to create a post environment to run the api test collection that is './src/quizify-server.postman_collection.json'.

            you need to set the following variable in postman environment
                "identifier"  // It would be the username or email that exists in your database
                "password"  // It would be the password for above user
                "baseURL"  // It would be the hostname alongwith port number on which your server is running
                "apiBasePath" // set it to the just 'api'


            After creating the environment you have to export it from postman to your machine for running test from the command line.
            by running command
            "newman run pathToYourPostmanCollection -e PathToYourPostmanEnvironment"
