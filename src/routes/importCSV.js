import express from 'express';
import csv from 'fast-csv';
import fs from 'fs';

import Question from '../models/question';
import authenticate from '../middlewares/authenticate';



let router = express.Router();



router.post('/', authenticate, (req, res) => {
  let streamFilePath = req.files['csvfile'][0].path;
  let csvStream = fs.createReadStream(streamFilePath)
      .pipe(csv({headers: true}))
    .on("data", function(data) {
      csvStream.pause();
      const {
                qstr,
                qtid,
                qchcat,
                qteam,
                qcatid,
                qendtime,
                qnegMark,
                qstarttime,
                qweightage,
                qlevel,
                qopt1,
                qopt2,
                qopt3,
                qopt4,
                qanswer,
                setid,
                qflag,
                qgroup,
                qformat
 } = data;
      Question.forge({
                qstr,
                qtid,
                qchcat,
                qteam,
                qcatid,
                qendtime,
                qnegMark,
                qstarttime,
                qweightage,
                qlevel,
                qopt1,
                qopt2,
                qopt3,
                qopt4,
                qanswer,
                setid,
                qflag,
                qgroup,
                qformat
 }).save();
        csvStream.resume();
    })
    .on("end", function() {
      res.status(200).json({ success: true })
      console.log("done")
      })
      .on("error", function(err){
        res.status(500).json({ error: err })
        console.log("Got error to read the csv file", err);
    });
});









export default router;
