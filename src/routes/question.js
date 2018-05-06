import express from 'express';


import authenticate from '../middlewares/authenticate';
import Question from '../models/question';

let router = express.Router();



router.post('/', authenticate, (req, res) => {
  console.log("Try to print the request body", req.body);
      const
        qstr = req.body.qstr,
        qtid = req.body.qtid,
        qchcat = req.body.qchcat,
        qteam = req.body.qteam,
        qcatid = req.body.qcatid,
        qendtime = req.body.qendtime,
        qnegMark = req.body.qnegMark,
        qstarttime = req.body.qstarttime,
        qweightage = req.body.qweightage,
        qlevel = req.body.qlevel,
        qopt1 = req.body.qopt1,
        qopt2 = req.body.qopt2,
        qopt3 = req.body.qopt3,
        qopt4 = req.body.qopt4,
        qanswer = req.body.qanswer,
        qflag = req.body.qflag,
        qformat = req.body.qformat,
        qgroup = req.body.qgroup,
        setid = req.body.setid;
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
          qflag,
          qgroup,
          qformat,
          setid
        }).save()
        .then((result) => {
          console.log("Send the success response");
          res.send({
            "messageCode": 200,
            "message": "Success"
          });
        }).catch(err => {
          console.log("====================", err);
          res.send({
          "messageCode": 500,
          "message": "Failure",
          "error": err
        })
      });

});







router.get('/:page', authenticate, (req, res) => {
  Question.query({}).orderBy('-id').fetchPage({page: req.params.page, pageSize: 6}).then(questions => {
    res.send({
      questions
    });
    });
});

export default router;
