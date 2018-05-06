import express from 'express';

import authenticate from '../middlewares/authenticate';
import LoadState from '../models/question_campaign';


let router = express.Router();

router.post('/', authenticate, (req, res)=> {
  const campaign_id = req.body.campaign_id;
  LoadState.count().then((count)=>{
    const setid = "QUIZ " + ++count;
    LoadState.forge({setid, campaign_id}).save().then((response)=>{
      res.send({
        "messageCode": 200,
        "message": "Success"
      });
    });
  }).catch((err)=> {
    console.log("Error", err);
  });
});

router.get('/:campaign_id', authenticate, (req, res)=> {
  LoadState.query({where: {
    campaign_id: req.params.campaign_id
  }}).fetchAll().then((quiz)=> {
    res.send({
      quiz
    });
  });
});




export default router;
