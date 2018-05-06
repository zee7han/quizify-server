import express from 'express';

import authenticate from '../middlewares/authenticate';
import LoadState from '../models/team';


let router = express.Router();

router.get('/', authenticate, (req, res)=> {
  LoadState.query({}).fetchAll().then((teams)=> {
    res.send({
      teams
    });
  });
});




export default router;
