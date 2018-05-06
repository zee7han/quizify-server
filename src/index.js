process.on(`uncaughtException`, console.error);

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import multer from 'multer';
import morgan from 'morgan';
require('dotenv').config();



import users from './routes/users';
import auth from './routes/auth';
import question from './routes/question';
import csv from './routes/importCSV';
import campaign from './routes/campaign';
import load_state from './routes/load_state';
import level from './routes/level';
import negative from './routes/negative';
import option from './routes/option';
import group from './routes/group';
import quiz from './routes/quiz';
import team from './routes/team';
import type from './routes/type';
import weightage from './routes/weightage';


let app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(multer({
  dest:  './upload_files/csvfile/'
}).fields([
  {
    name: 'csvfile',
    maxCount: 1
  }, {
    name: 'image',
    maxCount: 1
  }
]));




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});






// Signup
app.use('/api/users', users);


//Login
app.use('/api/auth', auth);


//Question
app.use('/api/question', question);

//Import
app.use('/api/csv', csv);


//Campaign
app.use('/api/campaign', campaign);


//LoadState
app.use('/api/load_state', load_state);


//Level
app.use('/api/level', level);

//Negative
app.use('/api/negative', negative);

//Options
app.use('/api/option', option);

//Groups
app.use('/api/group', group);

//Quizzes
app.use('/api/quiz', quiz);

//Teams
app.use('/api/team', team);

//Types
app.use('/api/type', type);


//Weightage
app.use('/api/weightage', weightage);



app.listen(process.env.PORT, () => console.log('Running on localhost:3003'));
