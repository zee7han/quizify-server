import express from 'express';

import authenticate from '../middlewares/authenticate';
import LoadState from '../models/question_group.js';


let router = express.Router();

router.get('/', authenticate, (req, res)=> {
  LoadState.query({}).fetchAll().then((groups)=> {
    res.send({
      groups
    });
  });
});




export default router;
